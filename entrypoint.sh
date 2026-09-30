#!/bin/sh
# Sync the baked static files into the persistent staticfiles volume on every
# boot, so a new deploy never serves stale collected assets shadowing the
# fresh code bundled in the image. (No --clear: with offline compression the
# worker only ever reads the manifest + bundles, so extra stale files are
# harmless, and --clear would choke on foreign-owned files.)
set -e
python manage.py collectstatic --noinput
# collectstatic only copies sources, never the CACHE output (bundles +
# offline manifest) -- restore those from the copy baked into the image.
cp -r /app/baked-static/. /app/staticfiles/
exec "$@"
