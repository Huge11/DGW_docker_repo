
const MusicElementInterface = require('../../MusicElementClasses')
const Components = require('./emailComponents')

const elementInterface = new MusicElementInterface()


const level = "Intermediate"
const type = "Chords"

class chordsIntermediateClass{
	constructor(){
		this.chords = [
			elementInterface.getIntermediateChord(),
			elementInterface.getIntermediateChord(),
		]
	}

	renderSection(){
		return this.generateIntermediateChords()
	}

	async generateIntermediateChords(){
		let header = Components.sectionHead(level)
		let htmlSection = await Components.chordsSection(this.chords, type, level)
		return header+htmlSection
	}

}


module.exports = chordsIntermediateClass








