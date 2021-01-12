const Components = require('./emailComponents')
const Random = require('../../MusicElementClasses/Random.js')
const cheerio = require('cheerio')

class noteAndStringClass{
	constructor(){
		this.find = {
		    'item1': {'note': Random.getAnyRandomNoteName(), 'string': Random.getRandomString()},
		    'item2': {'note': Random.getAnyRandomNoteName(), 'string': Random.getRandomString()}
		  }
  		this.identify = {
		    'item1': {'fret': Random.getRandomFret(), 'string': Random.getRandomString()},
		    'item2': {'fret': Random.getRandomFret(), 'string': Random.getRandomString()}
		  }
	}

	renderSection(){
		return this.generateNoteAndStringSection()
	}

	async generateNoteAndStringSection(){
		return Components.noteAndString.then(html=>{
			let $ = cheerio.load(html)
			$("#findNote1").text(this.find.item1.note)
			$("#findString1").text(this.find.item1.string)

			$("#findNote2").text(this.find.item2.note)
			$("#findString2").text(this.find.item2.string)

			$("#identifyFret1").text(this.identify.item1.fret)
			$("#identifyString1").text(this.identify.item1.string)

			$("#identifyFret2").text(this.identify.item2.fret)
			$("#identifyString2").text(this.identify.item2.string)
			return $.html()
		}) 
	}

}




module.exports = noteAndStringClass