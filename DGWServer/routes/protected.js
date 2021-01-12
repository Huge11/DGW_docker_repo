
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
const fileRouter = require('../fileRouter')
const Auth = require('../helpers/serverAuth')
const EmailGenerator = require('../helpers/EmailGenerator')
const Emailer = require('../helpers/Emailer')
const moment = require('moment-timezone')
const request = require('request')

const {appConfig} = require('../helpers')
const fs = require('fs')

const EmailPreferences = require('../models/EmailPreferences.js')
const User = require('../models/User.js')



router.use((req,res,next)=>{
	// console.log(req.cookies)
	const sessionCookie = req.cookies.daily_guitar_workout || '';
	const promise = Auth.verifySessionCookie(sessionCookie)
	promise.then((decodedCookie)=>{
		// console.log(decodedCookie)
		decodedCookie.admin ? res.locals.isAdmin = true : res.locals.isAdmin = false;
		req.decodedCookie = decodedCookie; 
		User.findOrCreate({uid: decodedCookie.uid})
		.then((user)=>{req.userRecord = user.doc; res.locals.user = user.doc; next()})
		.catch((err)=>{console.log(err); res.redirect('/login')})
	})
	.catch((e)=>{console.log("Cookies Are Invalid");res.redirect('/login')})
})

// router.use(function(req,res,next){
// 	res.locals.cookiesAreAccepted = req.userRecord.acceptedCookies
// 	next()
// })

router.use((req,res,next)=>{
	if(!req.userRecord.primaryEmail){
		req.userRecord.primaryEmail = req.decodedCookie.email
		req.userRecord.emails.push(req.decodedCookie.email)
		req.userRecord.save()
	}
	next()
})

// ============== Routes ============
router.get('/home', (req,res)=>{res.redirect('/dashboard')})
router.get('/dashboard', (req,res)=>{	
	const user = req.userRecord
	const page = {
		title: "Dashboard",
		url: '/dashboard'
	}

	res.render(fileRouter.home, {user, page})
})


router.get('/practice', (req,res)=>{

	// const preferencesPromise = EmailPreferences.findOne({uid: req.decodedCookie.uid})

	// const generatorPromise = preferencesPromise.then((preferences)=>{return new EmailGenerator(preferences)})
	const user = req.userRecord
	const page = {
		title: "Practice",
		url: '/practice'
	}
	// const htmlBody = generatorPromise.then((generator)=>{return generator.generateEmailPromise()})
	// htmlBody.then((html)=>{
		res.render(fileRouter.practice, {user, page})
	// })
})

router.get('/getEmailHtml', (req,res)=>{
	const preferencesPromise = EmailPreferences.findOne({uid: req.decodedCookie.uid})
	const generatorPromise = preferencesPromise.then((preferences)=>{return new EmailGenerator(preferences)})

	const htmlBody = generatorPromise.then((generator)=>{return generator.generateEmailPromise()})
	htmlBody.then((html)=>{
		// console.log(html)
		res.json({html: html})
	})

})

router.get('/emailPreferences', (req,res)=>{
	const user = req.userRecord
	const page = {
		title: "Email Preferences",
		url: '/emailPreferences'
	}
	const preferencesPromise = EmailPreferences.findOrCreate({uid: req.decodedCookie.uid})

	preferencesPromise.then((preferences)=>{
		// console.log(preferences)
		res.render(fileRouter.emailPreferences, {user, page, preferences: preferences.doc})
	})
})

router.post('/emailPreferences', (req,res)=>{
	const user = req.userRecord
	const preferencesPromise = EmailPreferences.findOne({uid: req.decodedCookie.uid})
	const data = req.body

	preferencesPromise.then((preferences)=>{
		preferences.learnTheFretBoard.section = data.learnTheFretBoardSection == 'on' ? true : false;
		preferences.learnTheFretBoard.noteAndString = data.noteAndString == 'on' ? true : false;
		
		preferences.scales.section = data.scalesSection == 'on' ? true : false;
		preferences.scales.beginner = data.scalesBeginner == 'on' ? true : false;
		preferences.scales.intermediate = data.scalesIntermediate == 'on' ? true : false;
		
		preferences.arpeggios.section = data.arpeggiosSection == 'on' ? true : false;
		preferences.arpeggios.beginner = data.arpeggiosBeginner == 'on' ? true : false;
		preferences.arpeggios.intermediate = data.arpeggiosIntermediate == 'on' ? true : false;
		
		preferences.chords.section = data.chordsSection == 'on' ? true : false;
		preferences.chords.beginner = data.chordsBeginner == 'on' ? true : false;
		preferences.chords.intermediate = data.chordsIntermediate == 'on' ? true : false;
		
		preferences.songsToLearn.section = data.songsToLearnSection == 'on' ? true : false;
		preferences.songsToLearn.beginnerAndIntermediate = data.songsToLearnBeginnerAndIntermediate == 'on' ? true : false;
		preferences.songsToLearn.beginner = data.songsToLearnBeginner == 'on' ? true : false;
		preferences.songsToLearn.intermediate = data.songsToLearnIntermediate == 'on' ? true : false;

		preferences.save().then(res.redirect('/emailPreferences'))
	})
})

router.get('/userSettings', (req,res)=>{
	// console.log(req.cookies)

	let user = req.userRecord
	user.email = req.decodedCookie.email
	const page = {
		title: "User Settings",
		url: '/usersetting'
	}
	const timeZoneOptions = getTimeZoneOptions()

	res.render(fileRouter.userSettings, {user, page, timeZoneOptions})
})

router.post('/userSettings', (req,res)=>{
	const update = req.body
	update.dontEmailMe ? update.dontEmailMe = true : update.dontEmailMe = false
	User.updateOne({uid: req.decodedCookie.uid}, update)
	.then(()=>{
		request(`${req.get('origin')}/schedule/user/update/${req.decodedCookie.uid}`)
		res.redirect('/userSettings')
	})
})

router.post('/updateEmail', (req,res)=>{
	Auth.updateUser(req.decodedCookie.uid, {email: req.body.email})
	User.findOne({uid: req.decodedCookie.uid}).then((user)=>{
		user.emails.unshift(req.body.email)
		user.primaryEmail = req.body.email
		user.save()
	})
	.then(()=>res.redirect('/userSettings'))
})

router.post('/deleteUser', (req,res)=>{
	console.log('deleteing user data' + req.decodedCookie.uid)
	EmailPreferences.deleteOne({uid: req.decodedCookie.uid})
	.then(()=>{return User.deleteOne({uid: req.decodedCookie.uid})})
	.then(Auth.deleteUser(req.decodedCookie.uid))
	.then(()=>{
		request(`${req.get('origin')}/schedule/user/remove/${req.decodedCookie.uid}`)
		const cookies = Object.keys(req.cookies)
		cookies.forEach((cookieName)=>{
			res.clearCookie(cookieName)
		})
		res.redirect('/signup')
	})
	.catch((e)=>{
		console.log(e)
		const emailer = new Emailer()
		const transportSetup = emailer.setUpTransport()
		const emailSent = transportSetup.then(()=>{return emailer.send_email({'email': process.env.ADMIN_EMAIL, 'emailBody': `<p>There Was An Error Deleteing A User.  uid: ${req.decodedCookie.uid}</p><p>${e}</p>`})})
		emailSent.then(()=>{emailer.closeTransport()})
		res.send("There Was an Error deleteing your data.  Our staff should be contacting you soon, or else email us at " + process.env.ADMIN_EMAIL)
	})

})

// router.get('/acceptCookies', (req,res)=>{
// 	User.findOne({uid: req.decodedCookie.uid}).then((user)=>{
// 		user.acceptCookies = true;
// 		return user.save()
// 	}).then(()=>{
// 		res.send('success')
// 	}).catch((e)=>{
// 		console.log(e)
// 		res.send(e)
// 	})
// })

// router.get('/deleteCookies', (req,res)=>{
// 	const cookies = Object.keys(req.cookies)
// 	cookies.forEach((cookieName)=>{
// 		res.clearCookie(cookieName)
// 	})
// 	res.redirect('/login')
// })





function getTimeZoneOptions(){
	return moment.tz.names()
} 





module.exports = router