from app import app, db, oauth
from models import User


@app.route('/callback')
def callback():
    token = oauth.auth0.authorize_access_token()
    user_info = oauth.auth0.parse_id_token(token)
    user = User.query.filter_by(auth0_id=user_info['sub']).first()
    if not user:
        user = User(
            auth0_id=user_info['sub'],
            email=user_info['email'],
            name=user_info['name']
        )
        db.session.add(user)
        db.session.commit()
    return 'User saved to database'
