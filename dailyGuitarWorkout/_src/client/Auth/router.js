import express from 'express';
import admin from 'firebase-admin'

// local Dependencies
import Auth from '../../utils/serverAuth.js';
import { createUserSettings, createEmailPreferences } from '../../utils/db/index.js';

const router = express.Router();

// ================== Server Side Routing ==========================

// clear cookies from browser :: must be defined before checkLogin middleware is applied to the router
router.get('/logout', (req,res) => {
	const sessionCookie = req.cookies.daily_guitar_workout || '';
	res.clearCookie('daily_guitar_workout');
	Auth.verifySessionCookie(sessionCookie)
		.then((decodedClaims) => {
			return admin.auth().revokeRefreshTokens(decodedClaims.sub);
		}).then(()=>{
			res.redirect('/login');
		}).catch(e=>{
			console.log(e)
			res.redirect('/login');
		})
});

// verify idtoken and return session cookie to browser => redirects to "/" for app mainpage;
router.post('/login', (req,res)=>{
    const idToken = req.body.idToken.toString();
	const expiresIn = req.body.rememberMe ? (60 * 60 * 24 * 5 * 1000) : (1000 * 60 * 60);

	// verifies idToken and creates session cookie if valide
	Auth.createSessionCookie(idToken, expiresIn)
		.catch((e)=>{console.log("couldn't create session cookie", e); res.redirect('/login')})
		.then((sessionCookie) => {
			const options = {
				maxAge: expiresIn,
				httpOnly: true,
			};

			res.cookie('daily_guitar_workout', sessionCookie, options);
			res.redirect('/');
		})
		.catch((error)=>{
			console.log(error)
			res.status(401).send('UNAUTHORIZED REQUEST!');
		});
});

router.post('/register', (req,res)=>{
	console.log('register route')
	const { idToken, displayName } = req.body;
	
	Auth.verifyToken(idToken)
		.then(({uid, email}) => {
			Promise.all([createUserSettings({uid, email, displayName}), createEmailPreferences({uid})])
				.then(documents=>{
					res.json({success: true, message: "Registered and Settings Created", idToken: idToken}) 
				})
				.catch(e=>{
					res.json({error: true, message: "There was an error creating your documents", status: 500, idToken: idToken})
				})
		})
		.catch(e=>console.log(e))

	// login logic / set auth cookie => client side javascript requests login route after signup logic
});









// ======================== Client Side Routing ==========================

const authFilePath = process.cwd()+'/client/Auth/';

const checkIfLoggedIn = (req,res,next)=>{
	const authCookies = req.cookies.daily_guitar_workout;
	if(authCookies){
		Auth.verifySessionCookie(authCookies)
			.then(isLoggedIn =>{
				isLoggedIn ? res.redirect('/') : next();
			});
	}else{
		next();
	}
};
router.use(checkIfLoggedIn);

// static recources
router.use('/auth', express.static(authFilePath));
// send html files
router.get('/login',  (req,res)=>{res.sendFile(authFilePath+'login.html');});
router.get('/register', (req,res)=>{res.sendFile(authFilePath+'register.html');});
router.get('/resetPassword', (req,res)=>{res.sendFile(authFilePath+'resetPassword.html');});


export default router;