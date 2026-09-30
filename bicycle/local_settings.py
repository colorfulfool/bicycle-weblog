from settings import *

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

WSGI_APPLICATION = None

# Local dev on Apple Silicon: node-sass (via compressor_toolkit) has no
# arm64/node>=15 binary, so compile SCSS with python libsass instead.
# Production (Docker) still uses compressor_toolkit + node-sass via settings.py.
COMPRESS_PRECOMPILERS = (
    ('text/x-scss', 'django_libsass.SassCompiler'),
    ('module', 'compressor_toolkit.precompilers.ES6Compiler'),
)

MEDIA_ROOT = os.path.join(BASE_DIR, '..', 'local_media', 'media')
STATIC_ROOT = os.path.join(BASE_DIR, '..', 'local_media', 'static')