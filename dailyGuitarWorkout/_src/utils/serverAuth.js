import admin from 'firebase-admin';
// const appConfig = require('./get-config')

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://daily-guitar-workout.firebaseio.com'
});

class Auth{

	createSessionCookie(idToken, expiresIn =(60 * 60 * 24 * 5 * 1000)){
		// Set session expiration to 5 days.
		return admin.auth().createSessionCookie(idToken, {expiresIn});
	}

	verifySessionCookie(sessionCookie){
		return admin.auth().verifySessionCookie(sessionCookie, true /** checkRevoked */);
	}

	createToken(uid){
		return admin.auth().createCustomToken(uid);
	}

	verifyToken(idToken){
		return admin.auth().verifyIdToken(idToken);
	}

	getUserByEmail(email){
		return admin.auth().getUserByEmail(email);
	}

	getUserById(uid){
		return admin.auth().getUser(uid);
	}

	createUser(userData){
		const {
			email,
			phoneNumber,
			password,
			firstName,
			lastName,
			photoUrl
	    } = userData;

		return admin.auth().createUser(user);

	}

	updateUser(uid, userData){
		return admin.auth().updateUser(uid, userData);
	}

	deleteUser(uid){
		return admin.auth().deleteUser(uid);
	}

}

export default new Auth()
