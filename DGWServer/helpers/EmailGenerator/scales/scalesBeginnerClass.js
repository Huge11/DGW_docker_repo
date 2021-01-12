const MusicElementInterface = require('../../MusicElementClasses')
const Components = require('./emailComponents') 

const elementInterface = new MusicElementInterface()

const level = "Beginner"
const type = "Scales"
const description = "First find the root note(red). Then play the Scale slowly, starting and ending on the root note."

class scalesBeginnerClass{
	constructor(){
		this.scales = [
			elementInterface.getBeginnerScale(),
			elementInterface.getBeginnerScale(),
		]
	}

	renderSection(){
		return this.generateBeginnerScales()
	}

	async generateBeginnerScales(){
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

		let beginnerScales = Promise.all(headPromise+leftPromise+rightPromise).then(data=>{
			return data.join("")
		})
		// let beginnerScales = await Components.scalesSection(this.scales, "Scales", "Beginner")
		return beginnerScales
	}

}


module.exports = scalesBeginnerClass