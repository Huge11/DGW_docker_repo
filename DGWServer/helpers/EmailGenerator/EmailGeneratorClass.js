const ElementFactory = require('./emailElementFactory')
const Components = require('./generalSections/emailComponents/')
const EmailPreferences = require('../../models/EmailPreferences.js')

// const css = require('css')
// const juice = require('juice')
const fs = require('fs')
const cheerio = require('cheerio')


class EmailGenerator{
	constructor(emailPreferences){
		this.parsedPreferences = this.parsePreferences(emailPreferences)
	}

	parsePreferences(pref){
		const keys = Object.keys(EmailPreferences.schema.paths)
		let parsedPreferences = []

		// gets all catagories
		keys.forEach((key)=>{
			const splitKey = key.split('.')
			const elementType = splitKey[0]
			let elementSection = splitKey[1]
			const element = pref[elementType][elementSection]

			if(element && pref[elementType].section){
				if(elementSection == 'section'){
					elementSection = 'header'
				}
				parsedPreferences.push(ElementFactory(elementType, elementSection))
			}

		})

		// returns an array of objects 
		return parsedPreferences
	}

	generateEmailPromise(parsedPreferences = this.parsedPreferences){
		let emailBody = ''
		let promiseArray = []

		parsedPreferences.unshift(ElementFactory('general', 'header'))
		parsedPreferences.push(ElementFactory('general', 'footer'))

		// creates an array of functions to "Promise.all"
		parsedPreferences.forEach((obj)=>{
			promiseArray.push(obj.renderSection())
		})

		// calls renderSection on each object and waits for any asyncronous calls to finish
		return Promise.all(promiseArray)
			.then((htmlArray)=>{
				emailBody = htmlArray.join('')
				return Components.emailWrapper.then(html=>{
					let $ = cheerio.load(html)
					$("#body").html(emailBody)
					return $.html()
				}) 
			})
			.catch(e=>console.log(e))
	}

	generateEmailBodyPromise(parsedPreferences = this.parsedPreferences){
		let emailBody = ''
		let promiseArray = []

		// creates an array of functions to "Promise.all"
		parsedPreferences.forEach((obj)=>{
			promiseArray.push(obj.renderSection())
		})

		// calls renderSection on each object and waits for any asyncronous calls to finish
		return Promise.all(promiseArray)
			.then((htmlArray)=>{
				emailBody = htmlArray.join('')
				return emailBody
			})
			.catch(e=>console.log(e))
	}

}

module.exports = EmailGenerator