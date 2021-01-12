
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
const Email = require('../models/Email.js')

const {appConfig} = require('../helpers')
const fs = require('fs')
// const alert = require('alert-node')


// ============== Routes ============

router.get('/', (req, res) => {res.sendFile(fileRouter.onBoarding)})
// router.get('/signupSuccess', (req, res) => res.sendFile(fileRouter.signupSuccess))
// router.get('/signupFailed', (req, res) => res.sendFile(fileRouter.signupFailed))
// router.get('/unsubscribe', (req,res)=>{res.sendFile(fileRouter.unsubscribe)})
router.get('/privacyPolicy', (req,res)=>{res.sendFile(fileRouter.privacyPolicy)})
router.get('/cookiePolicy', (req,res)=>{res.sendFile(fileRouter.cookiePolicy)})
router.get('/termsAndConditions', (req,res)=>{res.sendFile(fileRouter.termsAndConditions)})

router.post('/subscribe', (req,res)=>{
	console.log(`${req.body.email} requesting signup: validating now.....`)
	function validateEmail(email) {
	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);
	}
	const emailIsValid = validateEmail(req.body.email) 
	console.log(`email is valid: ${emailIsValid}`)


	if (!emailIsValid){
		console.log('email is not valid... Redirecting to home page')
		res.redirect('/signupFailed')
	}

	const newSubscriber = {
		'email': req.body.email,
	}

	console.log(`creating user${newSubscriber}`)
	const createPromise = Email.create(newSubscriber) // saved promise to var but unused
	// console.log(`returned ${createPromise}`)
	createPromise.then((data)=>{
		console.log(data)
	}).catch((err)=>{
		console.log(err)
	})

	res.redirect('/signupSuccess')
})

router.post('/unsubscribe', (req,res)=>{
	const unsubscriberEmail = req.body.email;

	Email.deleteOne({email: unsubscriberEmail}, function(err){
		if(err){
			console.log(`there was an error deleting the user: ${unsubscriberEmail}`)
			console.log(err)
			// alert('there was an error unsubscribeing your email, please email hugh@falloutsounds.com so we can remove your email manually')
			res.redirect('/unsubscribe')
		}

	})
	console.log('user Deleted: returned...')
	// alert('you have been unsubscribed')
	res.redirect('/')

})


router.get('/testing', (req,res)=>{
	res.sendFile(fileRouter.fullEmail)
})

router.get('/browserEmails/:uid/:date', (req,res)=>{
	res.sendFile(`${fileRouter.savedEmailsFolder}/${req.params.uid}/${req.params.date}.html`)
})


module.exports = router