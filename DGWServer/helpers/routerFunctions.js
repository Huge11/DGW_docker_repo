

const Emailer = require('./Emailer')
const EmailGenerator = require('./EmailGenerator')
const Auth = require('../helpers/serverAuth')
const fs = require('fs')
const moment = require('moment')

const fileRouter = require('../fileRouter.js')


const EmailPreferences = require('../models/EmailPreferences.js')
// const User = require('../models/User.js')



class RouterFunctions{

	sendTestEmail(user){
		fs.readFile(fileRouter.fullEmail, 'utf8', (err, data)=>{
			console.log(data)
			if(err){
				console.log(err)
				// return false
			}
			const emailer = new Emailer()
			return emailer.send_email({'email': user.primaryEmail, "emailBody": data})
		})
	}


	async generateAndSendEmail(user){
		console.log("getting user preferences")
		return EmailPreferences.findOne({uid: user.uid})
			.then((pref)=>{
				console.log("creating email generator")
				return new EmailGenerator(pref)
			})
			.then((generator)=>{
				console.log("generating email")
				return generator.generateEmailPromise()
			})
			.then((emailHtml)=>{
				console.log('saving Email')
				this.saveEmail(emailHtml,user)

				console.log("creating emailer")
				const emailData = {'email': user.primaryEmail, 'emailBody': emailHtml}
				// console.log(emailData.email)
				const emailer = new Emailer()		// console.log(emailHtml)
				return emailer.send_email(emailData)
			})
	}

	saveEmail(email,user){
		const savedEmailsLocation = `${__dirname}/../views/saved_emails/`
		if(fs.existsSync(savedEmailsLocation+user.uid)){
			fs.writeFile(`${__dirname}/../views/saved_emails/${user.uid}/${moment().format("YYYY-MM-DD")}.html`, email, err=>{
				if(err){
					console.log(err)
				}
			})
		}else{
			fs.mkdir(savedEmailsLocation+user.uid, {}, (err)=>{
				if(err){
					console.log(err)
				}else{
					fs.writeFile(`${__dirname}/../views/saved_emails/${user.uid}/${moment().format("YYYY-MM-DD")}.html`, email, err=>{
						console.log(err)
					})		
				}
			})
		}
		

	}
}


module.exports = new RouterFunctions()