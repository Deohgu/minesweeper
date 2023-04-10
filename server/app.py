from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from authlib.integrations.flask_client import OAuth
from os import environ as env

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = env.get('DATABASE_URL')
app.secret_key = env.get('APP_SECRET_KEY')
db = SQLAlchemy(app)
migrate = Migrate(app, db)

oauth = OAuth(app)

oauth.register(
    'auth0',
    client_id=env.get('AUTH0_CLIENT_ID'),
    client_secret=env.get('AUTH0_CLIENT_SECRET'),
    client_kwargs={
        'scope': 'openid profile email',
    },
    server_metadata_url=f'https://{env.get("AUTH0_DOMAIN")}/.well-known/openid-configuration'
)
