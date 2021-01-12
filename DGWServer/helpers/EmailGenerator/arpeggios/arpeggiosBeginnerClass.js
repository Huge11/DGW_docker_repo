const MusicElementInterface = require('../../MusicElementClasses')
const Components = require('./emailComponents')

const elementInterface = new MusicElementInterface()

const type = 'Arpeggios'
const level = 'Beginner'

class arpeggiosBeginnerClass{
	constructor(){
		this.arpeggios = [
			elementInterface.getBeginnerArpeggio(),
			elementInterface.getBeginnerArpeggio(),
		]
	}

	renderSection(){
		return this.generateBeginnerArpeggios()
	}

	async generateBeginnerArpeggios(){
		let header = await Components.sectionHead(level)
		let left = await Components.imageLeft(this.arpeggios[0], type, level)
		let right = await Components.imageRight(this.arpeggios[1], type, level)

		let htmlSection = header+left+right
		// let htmlSection = await Components.arpeggiosSection(this.arpeggios, 'Arpeggios', 'Beginner')
		return htmlSection
	}

}


module.exports = arpeggiosBeginnerClass