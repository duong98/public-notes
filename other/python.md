# Resources
- [Python Glossary](https://github.com/zacanger/doc/blob/master/python-glossary.md)


# Useful commands (for Unix)

#### Using virtualenv
1. `virtualenv env` to create env folder (`-p` option to include `path/to/pythonVersion`)
  - consider making a folder called `envs` in your home directory containing project environments for different projects
2. `. env/bin/activate` to enter virtual environment and `deactivate` to leave env

### Psycopg2 for Postgres
[Setup tutorial](https://wiki.postgresql.org/wiki/Psycopg2_Tutorial)

#### Django
First, run your `virtualenv`

1. `django-admin.py startproject <project-name>` to create a project folder
2. `python manage.py runserver [port number optional]` to run the Django dev server

- `$ pip freeze > requirements.txt` to echo a list of dependencies to a `.txt` file

Django design pattern: MVT - model, view, template (much like MVC, except views are like controllers)

##### `manage.py`
- The app entrypoint, where we can define import app variables

##### `urls.py`
- Urls are matched by regex as the first argument and the view as the second arg.
- `^` start string and `$` end string
- `r` before the string denotes 'raw string'
  - Example: `r'^what/.*$'` matches any URL starting with 'what'
- `r'^$'` matches the root URL
