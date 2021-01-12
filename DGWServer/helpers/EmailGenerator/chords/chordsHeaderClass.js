const Components = require('./emailComponents')
const cheerio = require('cheerio')

class chordsHeaderClass{

	renderSection(){
		return this.generateChordsHeader()
	}

	async generateChordsHeader(){
		
		const reason = "To improve your musical vocabulary"
		

		return Components.header.then(html=>{
			let $ = cheerio.load(html)
			$("#reason").text(`Today's Reason: ${reason}`)
			return $.html()
		})  
		
	}

}




module.exports = chordsHeaderClass