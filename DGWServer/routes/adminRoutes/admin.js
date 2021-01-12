
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



const express = require('express');
const router = express.Router();
const fileRouter = require('../../fileRouter');
const Auth = require('../../helpers/serverAuth');
const EmailGenerator = require('../../helpers/EmailGenerator');
const Emailer = require('../../helpers/Emailer');
const moment = require('moment-timezone');
const request = require('request');

const {appConfig, RouterFunctions} = require('../../helpers');
const fs = require('fs');

const EmailPreferences = require('../../models/EmailPreferences.js');
const User = require('../../models/User.js');

const ImporterRoutes = require('./importer.js')

router.use((req,res,next)=>{
	// console.log(req.cookies)
	const sessionCookie = req.cookies.daily_guitar_workout || '';
	const promise = Auth.verifySessionCookie(sessionCookie)
	promise.then((decodedCookie)=>{
		// console.log(decodedCookie)
		if(!decodedCookie.admin){
			res.statusCode(403)
			res.redirect('/')
		}
		res.locals.isAdmin = true
		req.decodedCookie = decodedCookie; 
		User.findOne({uid: decodedCookie.uid})
		.then((user)=>{req.userRecord = user; res.locals.user = user.doc; next()})
		.catch((err)=>{console.log(err); res.redirect('/login')})
	})
	.catch((e)=>{console.log("Cookies Are Invalid");res.redirect('/login')})
})


// ============== Routes ============
router.get('/', (req,res)=>{res.redirect('/dashboard')})
router.get('/dashboard', (req,res)=>{	
	const user = req.userRecord
	const page = {
		title: "Admin Dashboard",
		url: '/admin/dashboard'
	}

	res.render(fileRouter.adminDashboard, {user, page})
})

router.post('/testEmailGeneration', (req,res)=>{
	const promise = RouterFunctions.generateAndSendEmail(req.userRecord)
		.then((data)=>res.json({"success": "Email was sent!"}))
		.catch(e=>{console.log(e); res.json({"error": "There was an error sending email"})})
})

router.post('/testEmail', (req,res)=>{
	RouterFunctions.sendTestEmail(req.userRecord)
		.then((data)=>res.json({"success": "Email was sent!"}))
		.catch(e=>{console.log(e); res.json({"error": "There was an error sending email"})})
})

router.post('/getFirebaseUserByEmail', (req,res)=>{
	const email = req.body.email

	Auth.getUserByEmail(email)
		.then(user=>res.json({"user": user}))
		.catch(e=>{res.json({"error": e})})
})

router.post('/getUserByEmail', (req,res)=>{
	const email = req.body.email

	Auth.getUserByEmail(email)
		.then(user=>User.findOne({"uid": user.uid}))
		.then(data=>res.json({"user": data}))
		.catch(e=>{res.json({"error": e})})
})

router.post('/getUserPreferencesByEmail', (req,res)=>{
	const email = req.body.email

	Auth.getUserByEmail(email)
		.then(user=>EmailPreferences.findOne({"uid": user.uid}))
		.then(data=>res.json({"user": data}))
		.catch(e=>{res.json({"error": e})})
});

router.use('/', ImporterRoutes)



module.exports = router;