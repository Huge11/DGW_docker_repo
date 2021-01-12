
/*
		 _______  _______          _________ _______  _______ 
		(  ____ )(  ___  )|\     /|\__   __/(  ____ \(  ____ )
		| (    )|| (   ) || )   ( |   ) (   | (    \/| (    )|
		| (____)|| |   | || |   | |   | |   | (__    | (____)|
		|     __)| |   | || |   | |   | |   |  __)   |     __)
		| (\ (   | |   | || |   | |   | |   | (      | (\ (   
		| ) \ \__| (___) || (___) |   | |   | (____/\| ) \ \__
		|/   \__/(_______)(_______)   )_(   (_______/|/   \__/
                                                      
*/



const express = require('express')
const router = express.Router()
const cookieParser = require('cookie-parser')
const csrf = require('csurf')
const bodyParser = require('body-parser')
const fileRouter = require('../fileRouter')
const Auth = require('../helpers/serverAuth')


const {appConfig} = require('../helpers')
const fs = require('fs')



// ============== Routes ============

router.get('/login', (req,res)=>{res.sendFile(fileRouter.login)})
router.get('/signup', (req,res)=>{res.sendFile(fileRouter.signup)})
router.get('/passwordReset', (req,res)=>{res.sendFile(fileRouter.passwordReset)})


router.post('/login', (req,res)=>{
	const idToken = req.body.idToken.toString();

	const cookiePromise = Auth.createSessionCookie(idToken).catch((e)=>{console.log(e); res.redirect('/login')})

	cookiePromise.then((sessionCookie) => {
		// console.log(sessionCookie)
		const expiresIn = 60 * 60 * 24 * 5 * 1000
	    // Set cookie policy for session cookie.
    	const options = {maxAge: expiresIn};

    	res.cookie('daily_guitar_workout', sessionCookie, options);
    	// console.log(res)
    	res.end(JSON.stringify({status: 'success'}));
    })
	.catch((error)=>{
		console.log(error)
    	res.status(401).send('UNAUTHORIZED REQUEST!');

	})
})

router.all('/logout', (req,res)=>{
	const promise = Auth.deleteSessionCookie(req,res)
	promise
		.then(() => {
		    res.redirect('/login');
		})
		.catch((error) => {
		     res.redirect('/login');
		});
})


module.exports = router