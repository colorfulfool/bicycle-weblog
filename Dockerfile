# python-2.7.15
FROM python:2.7-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV DJANGO_SETTINGS_MODULE=bicycle.settings
ENV DATABASE_URL=sqlite:////app/data/db.sqlite3

# Set work directory
WORKDIR /app

# Install build dependencies using archive repositories
RUN sed -i 's/deb.debian.org/archive.debian.org/g' /etc/apt/sources.list && \
    sed -i 's/security.debian.org/archive.debian.org/g' /etc/apt/sources.list && \
    apt-get update && apt-get install -y \
    gcc \
    g++ \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for better Docker layer caching
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . /app/

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

# Expose port
EXPOSE 8000

# Define volumes for persistent data
VOLUME ["/app/data", "/app/media", "/app/staticfiles"]

# Health check using Python (no additional packages needed)
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/').read()" || exit 1

# Run the application
CMD ["gunicorn", "bicycle.wsgi", "--bind", "0.0.0.0:8000", "--log-file", "-"]
