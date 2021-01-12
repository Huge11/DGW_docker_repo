const MusicElementInterface = require('../../MusicElementClasses')
const Components = require('./emailComponents')

const elementInterface = new MusicElementInterface()

const type = "Scales"
const level = "Intermediate"
const description = "First find the root note(red). Then play the Arpeggio slowly, starting and ending on the root note."

class scalesIntermediateClass{
	constructor(){
		this.scales = [
			elementInterface.getIntermediateScale(),
			elementInterface.getIntermediateScale(),
		]
	}

	renderSection(){
		return this.generateIntermediateScales()
	}

	async generateIntermediateScales(){
		const headPromise = Components.sectionHead.then(html=>{
			let $ = cheerio.load(html)
			$("#title").text(level)
			return $.html()
		})

		let leftPromise = Components.imageLeft.then(html=>{
			const element = this.scales[0]
			let $ = cheerio.load(html)
			$("#title").text(element.getFormattedName())
			$("#body").text(description)

			$("#image").attr('href', element.getImageUrl())
			$("img", "#image").attr('src', element.getImageUrl())
			$("img", "#image").attr('alt', element.getFormattedName())
			$("img", "#image").attr('title', element.getFormattedName())

			return $.html()
		})

		let rightPromise = Components.imageRight.then(html=>{
			const element = this.scales[1]
			let $ = cheerio.load(html)
			$("#title").text(element.getFormattedName())
			$("#body").text(description)

			$("#image").attr('href', element.getImageUrl())
			$("img", "#image").attr('src', element.getImageUrl())
			$("img", "#image").attr('alt', element.getFormattedName())
			$("img", "#image").attr('title', element.getFormattedName())

			return $.html()
		})

		let intermediateScales = Promise.all(headPromise+leftPromise+rightPromise).then(data=>{
			return data.join("")
		})
		// let beginnerScales = await Components.scalesSection(this.scales, "Scales", "Beginner")
		return intermediateScales
	}

}


module.exports = scalesIntermediateClass