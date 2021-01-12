
const Components = require('./emailComponents')
const rp = require('request-promise')
const csv = require('csvtojson')
const {Random} = require('random-js')
const random = new Random()
const cheerio = require("cheerio")

const generalQuotes = require('../csv_files/generalQuotesJson.json')

class footer {


	renderSection(){
		return this.generateEmailFooter()
	}

	generateEmailFooter(){

		return Promise.all([this.generateEmailSongFactSectionPromise(), this.generateEmailFoot()])
			.then((resolvedArray)=>{
				return resolvedArray.join('')
			})
			.catch(e=>console.error(e))
	}

	generateEmailSongFactSectionPromise(next){
		let musicHistoryPromise = this.getDailyMusicHistoryPromise()
		// console.log(musicHistoryPromise)
		let promise = musicHistoryPromise
			.then((data)=>{
				return JSON.parse(data)[0]
			})
			.then(data=>{
				return Components.dailySongFact.then(html=>{
					let $ = cheerio.load(html)
					$("#title").text(data.title)
					$("#body").html(data.data)
					$("#link").attr("href", data.eventurl)
					$("#image").attr("href", data.eventurl)
					$("img", "#image").attr("src", data.imgurl)
					$("img", "#image").attr("title", data.title)
					$("img", "#image").attr("alt", data.title)
					return $.html()
				})
			})

		return promise
	}

	getDailyMusicHistoryPromise(){
		const address = "https://static.songfacts.com/calendar.eod.json"

		const musicHistoryPromise = rp(address)
		return musicHistoryPromise
	}

	generateEmailFoot(){
		const data = generalQuotes[random.integer(0,generalQuotes.length-1)]
		const content = {
			quoteBody: data.QUOTE,
			quoteAuthor: data.AUTHOR
		}
		return Promise.all([Components.socialMedia, Components.footer, Components.footQuote]).then(htmlArray=>{
			// console.log(htmlArray)
			const html = htmlArray.join("")
			let $ = cheerio.load(html)
			$("#quoteAuthor").text(content.quoteAuthor)
			$("#quoteBody").text(content.quoteBody)
			return $.html()
		})
	
	}
}

module.exports = footer