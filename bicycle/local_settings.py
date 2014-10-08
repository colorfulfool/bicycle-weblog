from settings import *

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

WSGI_APPLICATION = None

MEDIA_ROOT = os.path.join(BASE_DIR, '..', 'local_media', 'media')
STATIC_ROOT = os.path.join(BASE_DIR, '..', 'local_media', 'static')