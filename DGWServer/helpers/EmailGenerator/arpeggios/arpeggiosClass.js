const MusicElementInterface = require('../../MusicElementClasses')
const Components = require('./emailComponents')
const cheerio = require('cheerio')

const elementInterface = new MusicElementInterface()

const type = "arpeggios"
// const level = "Intermediate"
const description = "First find the root note(red). Then play the Arpeggio slowly, starting and ending on the root note."

class arpeggiosClass{
	constructor(level){
		this.level = level
		this.arpeggios = [
			elementInterface.getArpeggio(level),
			elementInterface.getArpeggio(level),
		]
	}

	renderSection(){
		return this.generateEmailSection()
	}

	generateEmailSection(){
		let emailSection = Promise.all([this.generateSectionHead(), this.generateImageLeft(), this.generateImageRight()]).then(data=>{
			// console.log(data)
			return data.join("")
		})
		// let beginnerarpeggios = await Components.arpeggiosSection(this.arpeggios, "arpeggios", "Beginner")
		return emailSection
	}

	async generateSectionHead(){
		return await Components.sectionHead.then(html=>{
			let $ = cheerio.load(html)
			$("#title").text(this.level.charAt(0).toUpperCase() + this.level.substring(1))
			return $.html()
		})
	}

	async generateImageLeft(){
		return await Components.imageLeft.then(html=>{
			const element = this.arpeggios[0]
			let $ = cheerio.load(html)
			$("#title").text(element.getFormattedName())
			$("#body").text(description)

			$("#image").attr('href', element.getImageUrl())
			$("img", "#image").attr('src', element.getImageUrl())
			$("img", "#image").attr('alt', element.getFormattedName())
			$("img", "#image").attr('title', element.getFormattedName())

			return $.html()
		})
	}

	async generateImageRight(){
		return await Components.imageRight.then(html=>{
			const element = this.arpeggios[1]
			let $ = cheerio.load(html)
			$("#title").text(element.getFormattedName())
			$("#body").text(description)

			$("#image").attr('href', element.getImageUrl())
			$("img", "#image").attr('src', element.getImageUrl())
			$("img", "#image").attr('alt', element.getFormattedName())
			$("img", "#image").attr('title', element.getFormattedName())

			return $.html()
		})
	}

}


module.exports = arpeggiosClass