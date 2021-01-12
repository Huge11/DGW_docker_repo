const Components = require('./emailComponents')
const cheerio = require('cheerio')

class scalesHeaderClass{

	renderSection(){
		return this.generateScalesHeader()
	}

	async generateScalesHeader(){
		return Components.header.then(html=>{
			let $ = cheerio.load(html)
			return $.html()
		})
	}

}




module.exports = scalesHeaderClass