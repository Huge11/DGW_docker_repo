const {appConfig} = require('../index.js')
const csv = require("csvtojson");
const nodemailer = require('nodemailer');
const schedule = require("node-schedule");
const EmailGenerator = require('../EmailGenerator')

// if(process.env.NODE_ENV == "Production"){
	const aws = require('aws-sdk')
// }



class Emailer{
	constructor(){
	    this.transporter = {}
	}
	
	async setUpTransport(){
		if(process.env.NODE_ENV == "Production"){
			console.log('setting up AWS transport')
			this.transporter = nodemailer.createTransport({
				SES: new aws.SES(),//{logger: console}),
				debug: true,
				logger: true
			})
			// .catch(e=>{console.log(e)})
			return this.verify()
		}
		else{
			console.log('setting up transport')
			this.transporter = nodemailer.createTransport({
				...process.env.EMAIL_TRANSPORT, 
		    	// pool: true, //keeps the server connection open
		  	})
		  	console.log(this.transporter.verify())
		  	return this.verify()
	  	}
	}

	verify(){
		// console.log('verifying transport')
		return this.transporter.verify()
	}


	send_email(env = {email: process.env.ADMIN_EMAIL, emailBody: "<h1>default Email</h1>"}){
		if(!this.transporter){
			console.log('no transport supplied')
			return
		}
		// console.log('sending email')

		const emailContents = {
			// headers: {
			// 	"X-SES-CONFIGURATION-SET": 
			// }
	        from: 'hugh@dailyguitarworkout.com',
	        to: env.email, //email address of our recipient
	        subject: 'Your Daily Practice Schedule ',
	        text: '##Plaintext version of the message##',
	        html: env.emailBody,
	        debug: true
	    }
	    // console.log(this.transporter)
	
	    return this.transporter.sendMail(emailContents)
		
	}

	closeTransport(){
		// console.log('closing transport')
		this.transporter.close()
	}


	sendTestEmail(){
		const transportSetup = this.setUpTransport()
		const emailSent = transportSetup.then(()=>{return this.send_email({'email': process.env.ADMIN_EMAIL, 'emailBody': "<p>Testing</p>"})})
		emailSent.then(()=>{this.closeTransport()})
		.catch((e)=>{
			console.log(e)
			this.closeTransport()
		})
	}


}






module.exports = Emailer