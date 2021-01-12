const MusicElementInterface = require('../../MusicElementClasses')
const Components = require('./emailComponents')
const cheerio = require('cheerio')

const elementInterface = new MusicElementInterface()

const type = "chords"
// const level = "Intermediate"
const description = "First find the root note(red). Then play the Arpeggio slowly, starting and ending on the root note."

class chordsClass{
	constructor(level){
		this.level = level
		this.chords = [
			elementInterface.getChord(level),
			elementInterface.getChord(level),
		]
	}

	renderSection(){
		return this.generateEmailSection()
	}

	generateEmailSection(){
		let emailSection = Promise.all([this.generateSectionHead(), this.generateChordsSection()]).then(data=>{
			// console.log(data)
			return data.join("")
		})
		// let beginnerchords = await Components.chordsSection(this.chords, "chords", "Beginner")
		return emailSection
	}

	async generateSectionHead(){
		return await Components.sectionHead.then(html=>{
			// console.log(html)
			let $ = cheerio.load(html)
			$("#title").text(this.level.charAt(0).toUpperCase() + this.level.substring(1))
			return $.html()
		})
	}

	generateChordsSection(){
		return Components.chordsSection.then(html=>{
			const element1 = this.chords[0]
			const element2 = this.chords[1]
			let $ = cheerio.load(html)
			$(".title", "#left").text(element1.getFormattedName())
			$(".body", "#left").text(description)

			$(".image","#left").attr('href', element1.getImageUrl())
			$("img", "#left").attr('src', element1.getImageUrl())
			$("img", "#left").attr('alt', element1.getFormattedName())
			$("img", "#left").attr('title', element1.getFormattedName())

			$(".title", "#right").text(element2.getFormattedName())
			$(".body", "#right").text(description)

			$(".image","#right").attr('href', element2.getImageUrl())
			$("img", "#right").attr('src', element2.getImageUrl())
			$("img", "#right").attr('alt', element2.getFormattedName())
			$("img", "#right").attr('title', element2.getFormattedName())

			return $.html()
		})
	}

	// async generateImageLeft(){
	// 	return await Components.imageLeft.then(html=>{
	// 		const element = this.chords[0]
	// 		let $ = cheerio.load(html)
	// 		$("#title").text(element.getFormattedName())
	// 		$("#body").text(description)

	// 		$("#image").attr('href', element.getImageUrl())
	// 		$("img", "#image").attr('src', element.getImageUrl())
	// 		$("img", "#image").attr('alt', element.getFormattedName())
	// 		$("img", "#image").attr('title', element.getFormattedName())

	// 		return $.html()
	// 	})
	// }

	// async generateImageRight(){
	// 	return await Components.imageRight.then(html=>{
	// 		const element = this.chords[1]
	// 		let $ = cheerio.load(html)
	// 		$("#title").text(element.getFormattedName())
	// 		$("#body").text(description)

	// 		$("#image").attr('href', element.getImageUrl())
	// 		$("img", "#image").attr('src', element.getImageUrl())
	// 		$("img", "#image").attr('alt', element.getFormattedName())
	// 		$("img", "#image").attr('title', element.getFormattedName())

	// 		return $.html()
	// 	})
	// }

}


module.exports = chordsClass