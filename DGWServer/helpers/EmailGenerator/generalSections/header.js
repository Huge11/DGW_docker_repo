
const Components = require('./emailComponents')
const csv = require('csvtojson')
const {Random} = require('random-js')
const random = new Random()

const cheerio = require('cheerio')
const fs = require('fs').promises


class header {

	renderSection(){
		const emailHeader = Promise.all([
			this.generateEmailPreHeader(),
			this.generateEmailHeader(),
			this.generateEmailBanner(),
			this.generateEmailQuote(),
			this.generateEmailAdContent(),
			this.generateEmailGreyBreak()
		])
		const html = emailHeader.then((array)=>{return array.join('')})
		return html
	}


	generateEmailPreHeader(){
		return Components.preHeader.then(data=>{
				let $ = cheerio.load(data)
				$('#text').text('Your daily mix of guitar skills and lessons')
				$('#link').attr('href', 'http://dailyguitarworkout.com/practice')
				return $.html()
			})
	}

	generateEmailHeader(){
		// console.log(req.get('host'))
		const imgUrl = 'http://dailyguitarworkout.com/images/brand/long_yellow_blue_background.png'
		// const links = [{'name': "Visit Our Site", 'address': "dailyguitarworkout.com/emailPreferences"}]

		return Components.header.then(data=>{
			let $ = cheerio.load(data)
			$('#logo').attr('src', imgUrl)
			return $.html()
		})
	}

	generateEmailBanner(){
		const bannerImage = 'http://dailyguitarworkout.com/images/stripoImages/banner.png'

		return Components.banner.then(data=>{
			let $ = cheerio.load(data)
			$("#banner").attr("src", bannerImage)
			return $.html()
		})
	}

	generateEmailQuote(){
		const csvFilePath = `${__dirname}/../csv_files/guitaristQuotes.csv`
		return csv().fromFile(csvFilePath)
		.then(async(quoteArray)=>{
			return await quoteArray[random.integer(0, quoteArray.length - 1)]
		})
		.then(data=>{
			return Components.quote.then(html=>{
				let $ = cheerio.load(html)
				$("#author").text(data.name)
				$("#body").text(data.body)
				return $.html()
			})
		})
	}

	generateEmailAdContent(){
		const content = {
			'img': 'https://embedwistia-a.akamaihd.net/deliveries/5468afd69ae938335f944c079dd4220e3a854c4a.webp?image_crop_resized=1280x720',
			'title': 'Learn From GuitarTricks.com',
			'body': 'Guitar Tricks has the largest collection of guitar turotials on the web!',
			'link': 'https://www.guitartricks.com/?a_aid=5cc921699921e'  
		}

		return Components.adContent.then(data=>{
			let $ = cheerio.load(data)
			$("#image").attr("href", content.link)
			$("img", "#image").attr("src", content.img)
			$("img", "#image").attr("title", content.link)

			$("#title").text(content.title)
			$("#body").text(content.body)
			$("#link").attr("href", content.link)
			return $.html()
		}) 
	}

	generateEmailGreyBreak(){
		const csvFilePath = `${__dirname}/../csv_files/advice.csv`
		const allAdvicePromise = csv().fromFile(csvFilePath)
		
		
		let advice = allAdvicePromise.then(async(adviceArray)=>{
			return await adviceArray[random.integer(0, adviceArray.length -1)]
		})

		return advice.then((data)=>{
			return Components.greyBreak.then(html=>{
				let $ = cheerio.load(html)
				$("#advice").text(data.advice)
				return $.html()
			});
		})
		
	}
}

module.exports = header