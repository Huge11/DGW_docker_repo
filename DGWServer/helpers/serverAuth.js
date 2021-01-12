const admin = require('firebase-admin')
const appConfig = require('./get-config')

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://daily-guitar-workout.firebaseio.com'
});

class Auth{

	createSessionCookie(idToken){
		// Set session expiration to 5 days.
		const expiresIn = 60 * 60 * 24 * 5* 1000;
		// Create the session cookie. This will also verify the ID token in the process.
		// The session cookie will have the same claims as the ID token.
		// To only allow session cookie setting on recent sign-in, auth_time in ID token
		// can be checked to ensure user was recently signed in before creating a session cookie.
		return admin.auth().createSessionCookie(idToken, {expiresIn})
	}

	verifySessionCookie(sessionCookie){
		// Verify the session cookie. In this case an additional check is added to detect
		// if the user's Firebase session was revoked, user deleted/disabled, etc.
		return admin.auth().verifySessionCookie(sessionCookie, true /** checkRevoked */)
		
	}

	deleteSessionCookie(req, res){
		const sessionCookie = req.cookies.session || '';
		res.clearCookie('daily_guitar_workout');
		return admin.auth().verifySessionCookie(sessionCookie)
			.then((decodedClaims) => {
    			return admin.auth().revokeRefreshTokens(decodedClaims.sub);
    		})

	}

	createToken(uid){
		return admin.auth().createCustomToken(uid)
	}

	verifyToken(idToken){
		return admin.auth().verifyIdToken(idToken)
	}

	getUserByEmail(email){
		return admin.auth().getUserByEmail(email)
	}

	getUserById(uid){
		return admin.auth().getUser(uid)
	}

	createUser(userData){
		const {
			email,
			phoneNumber,
			password,
			firstName,
			lastName,
			photoUrl
	    } = userData

		return admin.auth().createUser(user)

	}

	updateUser(uid, userData){
		return admin.auth().updateUser(uid, userData)
	}

	deleteUser(uid){
		return admin.auth().deleteUser(uid)
	}

}


module.exports = new Auth()