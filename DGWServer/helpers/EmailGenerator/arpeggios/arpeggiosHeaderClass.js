const Components = require('./emailComponents')
const cheerio = require('cheerio')


class arpeggiosHeaderClass{

	renderSection(){
		return this.generateArpeggiosHeader()
	}

	async generateArpeggiosHeader(){
		const reason = "To improve your musical vocabulary"

		return Components.header.then(html=>{
			let $ = cheerio.load(html)
			$("#title").text("Practice Your Arpeggios")
			$("#body").text("Practicing your arpeggios is one of the most important parts of your daily practice.  We're going to send you a new reason every day to keep you improving.")
			$("#reason").text(`Today's Reason: ${reason}`)
			return $.html()
		}) 
	}

}




module.exports = arpeggiosHeaderClass