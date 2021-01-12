const Components = require('./emailComponents')
const cheerio = require("cheerio")


class scalesHeaderClass{

	renderSection(){
		return this.generateScalesHeader()
	}

	async generateScalesHeader(){
		const reason = "To improve your musical vocabulary"

		return Components.header.then(html=>{
			let $ = cheerio.load(html)
			$("reason").text(`Today's Reason: ${reason}`)
			return $.html()
		}) 
		
	}

}




module.exports = scalesHeaderClass