const Components = require('./EmailComponents');
// const inlineCss = require('inline-css');
const request = require('request')
const rp = require('request-promise')
const MusicElementInterface = require('../MusicElementClasses')
const csv = require('csvtojson')
const {Random} = require('random-js')


const random = new Random()

class EmailGenerator{
	constructor(){
	}

	async generateEmail(preferences = {}, testing = false){
		if(testing){ 
			// let songFactPromise = this.generateEmailSongFactSectionPromise() 
			let testing = this.generateEmailHtmlPromise()
			// testing.then((innerHtml)=>{html = Components.emailWrapper(testing)})
			// const html = Components.emailWrapper(testing)

			return testing
		}
		return this.generateEmailHtmlPromise(preferences)

	}



	generateEmailHtmlPromise(preferences = {}){
		let emailHtml = this.generateEmailBodyPromise(preferences)
		let wrappedEmail = emailHtml.then(Components.emailWrapper)
		return wrappedEmail		
	}

	generateEmailBodyPromise(preferences = {}){
		let emailPreHeader = this.generateEmailPreHeader()
		let emailHeader = this.generateEmailHeader()
		let emailBanner = this.generateEmailBanner()
		let betaLaunch = Components.betaLaunch()
		let emailAdContent = this.generateEmailAdContent()
		let learnTheNeck = Components.learnTheNeck()
		let learnANewSong = Components.learnANewSong()
		let emailFooter = this.generateEmailFooter()

		return Promise.all([
			this.generateEmailSongFactSectionPromise(), 
			this.generateEmailQuote(), 
			this.generateEmailGreyBreak(), 
			this.generateChordSection(),
			this.generateScaleSection()
			])
			.then((results)=>{
				let emailDailySongFact = results[0];
				let emailQuote = results[1]
				let emailGreyBreak = results[2]
				let chordSection = results[3]
				let scaleSection = results[4]

				let emailBody = emailPreHeader+emailHeader+emailBanner+betaLaunch+emailQuote+emailAdContent+emailGreyBreak+learnTheNeck+scaleSection+chordSection+learnANewSong+emailDailySongFact+emailFooter;
				return emailBody
			})
			.catch((e)=>{console.log(e)})
	}

	parsePreferences(preferences){
		let array = []

		if (preferences.noteAndString){
			array.push(Components.learnTheNeck)
		}
		if (preferences.scalesBeginner){
			array.push(Components.learnTheNeck)
		}
		
	}

	generateEmailPreHeader(){

		let preHeader = Components.emailPreHeader()
		return preHeader
	}

	generateEmailHeader(){
		const imgUrl = 'http://dailyguitarworkout.com/images/logo/logo_TextOnRight.png'
		const links = [{'name': "Visit Our Site", 'address': "dailyguitarworkout.com"}]
		const data =  {
			imgUrl,
			links
		}

		let header = Components.emailHeader(data);
		return header
	}

	generateEmailBanner(){
		const bannerImage = 'http://dailyguitarworkout.com/images/stripoImages/banner.png'

		let banner = Components.emailBanner(bannerImage)
		return banner
	}

	generateEmailQuote(){
		const csvFilePath = `${__dirname}/csv_files/guitaristQuotes.csv`
		const allQuotesPromise = csv().fromFile(csvFilePath)

		let quote =	allQuotesPromise.then(async(quoteArray)=>{
			return await quoteArray[random.integer(0, quoteArray.length)]
		})

		return quote.then((data)=>{
			// console.log(data)
			return Components.emailQuote(data)
		})
	}

	generateEmailAdContent(){
		const content = {
			'img': 'https://embedwistia-a.akamaihd.net/deliveries/5468afd69ae938335f944c079dd4220e3a854c4a.webp?image_crop_resized=1280x720',
			'title': 'Learn From GuitarTricks.com',
			'body': 'Guitar Tricks has the largest collection of guitar turotials on the web!',
			'link': 'https://www.guitartricks.com/'  
		}

		let adContent = Components.emailAdContent(content)
		return adContent
	}

	generateEmailGreyBreak(){
		const csvFilePath = `${__dirname}/csv_files/advice.csv`
		const allAdvicePromise = csv().fromFile(csvFilePath)
		
		
		let advice = allAdvicePromise.then(async(adviceArray)=>{
			return await adviceArray[random.integer(0, adviceArray.length)]
		})

		return advice.then((data)=>{
			return Components.emailGreyBreak(data);
		})
		
	}


	async generateChordHeader(){
		const headerData = {
			reason: "To improve your musical vocabulary"
		}

		let chordHeader = await Components.chordsHeader(headerData)
		return chordHeader
	}

	async generateBeginnerChords(){
		const elementInterface = new MusicElementInterface()
		// console.log(elementInterface.getBeginnerChord())
		const chords = [
			elementInterface.getBeginnerChord(),
			elementInterface.getBeginnerChord(),
		]

		console.log(chords)
		let beginnerChords = await Components.chordsBeginner(chords)
		return beginnerChords
	}

	async generateIntermediateChords(){
		const elementInterface = new MusicElementInterface()
		// console.log(elementInterface.getBeginnerChord())
		const chords = [
			elementInterface.getIntermediateChord(),
			elementInterface.getIntermediateChord(),
		]

		console.log(chords)
		let intermediateChords = await Components.chordsIntermediate(chords)
		return intermediateChords
	}

	generateChordSection(){
		const chordSectionPromise = Promise.all([this.generateChordHeader(), this.generateBeginnerChords(), this.generateIntermediateChords()])
		const htmlPromise = chordSectionPromise.then(async (results)=>{
			let html = await results[0]+results[1]+results[2]
			return html
		})
		return htmlPromise
	}


	async generateScalesHeader(){
		const headerData = {
			reason: "To improve your musical vocabulary"
		}

		let scalesHeader = await Components.scalesHeader(headerData)
		return scalesHeader
	}

	async generateBeginnerScales(){
		const elementInterface = new MusicElementInterface()

		const scales = [
			elementInterface.getBeginnerScale(),
			elementInterface.getBeginnerScale(),
		]
		const arpeggios = [
			elementInterface.getBeginnerArpeggio(),
			elementInterface.getBeginnerArpeggio(),
		]

		// console.log(scales)
		// console.log(arpeggios)
		let beginnerScales = await Components.scalesBeginner(scales, arpeggios)
		return beginnerScales
	}

	async generateIntermediateScales(){
		const elementInterface = new MusicElementInterface()

		const scales = [
			elementInterface.getIntermediateScale(),
			elementInterface.getIntermediateScale(),
		]
		const arpeggios = [
			elementInterface.getIntermediateArpeggio(),
			elementInterface.getIntermediateArpeggio(),
		]

		// console.log(scales)
		// console.log(arpeggios)
		let intermediateScales = await Components.scalesIntermediate(scales, arpeggios)
		return intermediateScales
	}

	generateScaleSection(){
		const scaleSectionPromise = Promise.all([this.generateScalesHeader(), this.generateBeginnerScales(), this.generateIntermediateScales()])
		const htmlPromise = scaleSectionPromise.then(async (results)=>{
			let html = await results[0]+results[1]+results[2]
			return html
		})
		return htmlPromise
	}


	generateEmailFooter(){

		let footer = Components.emailFooter()
		return footer
	}




 // ===========================  Specific Music Element Generation ==========================


	generateEmailTwoColumnBlocksArpeggio(){
		let musicElement1 = new MusicElement({'type': 'arpeggio'})
		let musicElement2 = new MusicElement({'type': 'arpeggio'})

		const content1 = {
		  'img': musicElement1.getImageUrl(),
		  'title': musicElement1.getFormatedName(),
		  'body': musicElement2.getDescription(),
		  'button': {'text': 'button', 'url': 'dailyguitarworkout.com'}
		};
		const content2 =  {
		  'img': musicElement2.getImageUrl(),
		  'title': musicElement2.getFormatedName(),
		  'body': musicElement2.getDescription(),
		  'button': {'text': 'button', 'url': 'dailyguitarworkout.com'}
		};


		let emailRow = Components.emailTwoColumnBlocks(content1, content2)
		return emailRow
	}

	generateEmailSongFactSectionPromise(next){
		let musicHistoryPromise = this.getDailyMusicHistoryPromise()
		// console.log(musicHistoryPromise)
		let promise = musicHistoryPromise
			.then((data)=>{
				return JSON.parse(data)[0]
			})
			.then(Components.emailDailySongFact)

		return promise
	}

	getDailyMusicHistoryPromise(){
		const address = "https://static.songfacts.com/calendar.eod.json"

		const musicHistoryPromise = rp(address)
		return musicHistoryPromise
	}



}







module.exports = EmailGenerator