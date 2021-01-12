const MusicElementInterface = require('../../MusicElementClasses')
const Components = require('./emailComponents')

const elementInterface = new MusicElementInterface()


const type = 'Arpeggios'
const level = 'Intermediate'

class arpeggiosIntermediateClass{
	constructor(){
		this.arpeggios = [
			elementInterface.getIntermediateArpeggio(),
			elementInterface.getIntermediateArpeggio(),
		]
	}

	renderSection(){
		return this.generateIntermediateArpeggios()
	}

	async generateIntermediateArpeggios(){
		let header = await Components.sectionHead(level)
		let left = await Components.imageLeft(this.arpeggios[0], type, level)
		let right = await Components.imageRight(this.arpeggios[1], type, level)

		let htmlSection = header+left+right
		// let htmlSection = await Components.arpeggiosSection(this.arpeggios, 'Arpeggios', 'Intermediate')
		return htmlSection
	}

}


module.exports = arpeggiosIntermediateClass