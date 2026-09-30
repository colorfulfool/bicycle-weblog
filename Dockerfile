# python-2.7.15
FROM python:2.7-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV DJANGO_SETTINGS_MODULE=bicycle.settings
ENV DATABASE_URL=sqlite:////app/data/db.sqlite3

# Set work directory
WORKDIR /app

# Install build dependencies using archive repositories.
# Node 10 comes from the official nodejs.org tarball because the
# NodeSource apt repo for node_10.x is retired (broken GPG signature).
# The tarball arch follows the target platform (server runs linux/amd64,
# so build with --platform linux/amd64 when targeting it).
RUN sed -i 's/deb.debian.org/archive.debian.org/g' /etc/apt/sources.list && \
    sed -i 's/security.debian.org/archive.debian.org/g' /etc/apt/sources.list && \
    apt-get update && apt-get install -y \
    gcc \
    g++ \
    curl \
    && rm -rf /var/lib/apt/lists/* \
    && ARCH=$(uname -m) && if [ "$ARCH" = "aarch64" ]; then NODE_ARCH=arm64; else NODE_ARCH=x64; fi \
    && curl -fsSLO https://nodejs.org/dist/v10.24.1/node-v10.24.1-linux-${NODE_ARCH}.tar.gz \
    && tar -xzf node-v10.24.1-linux-${NODE_ARCH}.tar.gz -C /usr/local --strip-components=1 \
    && rm node-v10.24.1-linux-${NODE_ARCH}.tar.gz \
    && node --version && npm --version

# Copy requirements first for better Docker layer caching
COPY requirements.txt package.json package-lock.json /app/
RUN pip install --no-cache-dir -r requirements.txt
RUN npm ci

# Copy project files
COPY . /app/
RUN chmod +x /app/entrypoint.sh

# Create directories for database, media, and static files
RUN mkdir -p /app/staticfiles /app/media /app/data

# Create a non-root user
RUN adduser --disabled-password --gecos '' appuser && \
    chown -R appuser:appuser /app
USER appuser

# Create database and run migrations
RUN python manage.py migrate --noinput || echo "Migrations completed with warnings"

# Collect static files
RUN python manage.py collectstatic --noinput

# Precompress CSS/JS bundles + offline manifest so the worker never compiles
# at request time (COMPRESS_OFFLINE=True in bicycle/settings.py).
# Stash a copy outside staticfiles: at runtime the persistent volume shadows
# /app/staticfiles, and entrypoint.sh restores these into it on every boot.
RUN python manage.py compress --force && \
    mkdir -p /app/baked-static && \
    cp -r /app/staticfiles/CACHE /app/baked-static/CACHE

# Expose port
EXPOSE 8000

# Define volumes for persistent data. staticfiles stays a volume (e.g. for a
# future reverse proxy serving assets); entrypoint.sh refreshes it from the
# image on every boot so stale deploys can't shadow fresh code.
VOLUME ["/app/data", "/app/media", "/app/staticfiles"]

# Health check using Python (urllib2: this image runs Python 2.7,
# which has no urllib.request module)
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD python -c "import urllib2; urllib2.urlopen('http://localhost:8000/').read()" || exit 1

# Run the application
ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["gunicorn", "bicycle.wsgi", "--bind", "0.0.0.0:8000", "--log-file", "-"]
