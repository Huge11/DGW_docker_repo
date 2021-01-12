const express = require('express')
const schedule = require("node-schedule");

const moment = require('moment-timezone')

const Emailer = require('../helpers/Emailer')
const EmailGenerator = require('../helpers/EmailGenerator')
const Auth = require('../helpers/serverAuth')
const { timeZoneConverter } = require('../helpers')

const EmailPreferences = require('../models/EmailPreferences.js')
const User = require('../models/User.js')

const router = express.Router()


// const emailGenerator = new EmailGenerator()

const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

let jobsObject = {}

const usersPromise = User.find({})
usersPromise.then((users)=>{
	users.forEach((user)=>{
		if(user.dontEmailMe){return}
		
		var time = timeZoneConverter({hour: user.emailMeAt.hour, minute: user.emailMeAt.minute, timeZone: user.timeZone})

		const sendJob = generateAndSendEmail.bind(null, user)

		var message_job = schedule.scheduleJob(time, sendJob)

		jobsObject[user.uid] = message_job
	})
	// console.log(jobsObject)
})


function generateAndSendEmail(user){
	const preferencePromise = EmailPreferences.findOne({uid: user.uid})
	const generatorPromise = preferencePromise.then((pref)=>{
		return new EmailGenerator(pref)
	})
	const emailPromise = generatorPromise.then((generator)=>{
		return generator.generateEmailPromise()
	})
	emailPromise.then((emailHtml)=>{
		const emailer = new Emailer()		// console.log(emailHtml)
		const transportSetup = emailer.setUpTransport()
		const emailSent = transportSetup.then(()=>{return emailer.send_email({'email': user.primaryEmail, 'emailBody': emailHtml})})
		emailSent.then(()=>{emailer.closeTransport()})
	})
	.catch((e)=>{console.log(e)})
}

// router.get('/user/remove/:uid')


router.get('/user/update/:uid', (req,res)=>{

	User.findOne({uid: req.params.uid})
	.then((user)=>{
		if(user.dontEmailMe){
			if(jobsObject[user.uid]){
				jobsObject[user.uid].cancel()
			}
			return 
		}

		var time = timeZoneConverter({hour: user.emailMeAt.hour, minute: user.emailMeAt.minute, timeZone: user.timeZone})
		const job = jobsObject[req.params.uid]
		
		if(job){
			return job.reschedule(time)
		}else{
			const sendJob = generateAndSendEmail.bind(null, user)
			var message_job = schedule.scheduleJob(time, sendJob)
			jobsObject[user.uid] = message_job
			return message_job
		}
	})
	.then(()=>{res.send('success')})
	.catch((e)=>{res.send(`Error ${e}`)})

	// console.log(jobsObject)
})

module.exports = router