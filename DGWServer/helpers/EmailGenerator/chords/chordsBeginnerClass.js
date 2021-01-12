
const MusicElementInterface = require('../../MusicElementClasses')
const Components = require('./emailComponents')

const elementInterface = new MusicElementInterface()


const level = "Beginner"
const type = "Chords"

class chordsBeginnerClass{
	constructor(){
		this.chords = [
			elementInterface.getBeginnerChord(),
			elementInterface.getBeginnerChord(),
		]
	}

	renderSection(){
		return this.generateBeginnerChords()
	}

	async generateBeginnerChords(){
		let header = Components.sectionHead(level)
		let htmlSection = await Components.chordsSection(this.chords, type, level)
		return header+htmlSection
	}

}


module.exports = chordsBeginnerClass








