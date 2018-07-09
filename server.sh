source venv/bin/activate
export BABEL_ENV="development"
python manage.py runserver_plus --settings=bicycle.local_settings &
open http://127.0.0.1:8000/

