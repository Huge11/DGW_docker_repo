const {appConfig} = require('../index.js')
const csv = require("csvtojson");
const nodemailer = require('nodemailer');
const schedule = require("node-schedule");
const EmailGenerator = require('../EmailGenerator')


const aws = require('aws-sdk')
const SES = new aws.SES() //{logger: console}


// console.log(SES)
// Create sendEmail params 
var getSESParams = (recipient, html)=>{
  return {
  	Destination: { 
	    ToAddresses: [ recipient ]
	  },
	  Message: { /* required */
	    Body: { /* required */
	      Html: {
	       Charset: "UTF-8",
	       Data: html
	      },
	      Text: {
	       Charset: "UTF-8",
	       Data: "Text Fallback"
	      }
	     },
	     Subject: {
	      Charset: 'UTF-8',
	      Data: 'Daily Guitar Practice'
	     }
	    },
	  Source: 'hugh@dailyguitarworkout.com', /* required */
	  ReplyToAddresses: [
	     'hugh@dailyguitarworkout.com',
	    /* more items */
	  ],
	}
};

class Emailer_SES{
	constructor(){
		// this.transporter = new aws.SES({logger: console})
	}

	setUpTransport(){
		return Promise.resolve()
	}

	verify(){
		return Promise.resolve()
	}

	closeTransport(){
		return Promise.resolve()
	}

	send_email(env = {email: process.env.ADMIN_EMAIL, emailBody: "<h1>default Email</h1>", ...env}){
		console.log('sending email')
		const params = getSESParams(env.email, env.emailBody)
		const response = SES.sendEmail(params).promise()
		return response
	}

	sendTestEmail(){
		this.send_email()
		return Promise.resolve()
	}
}








module.exports = Emailer_SES