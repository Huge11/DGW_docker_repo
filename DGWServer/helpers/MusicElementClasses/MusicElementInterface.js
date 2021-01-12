
const ChordFactory = require('./ChordClasses/ChordFactoryClass')
const ScaleFactory = require('./ScaleClasses/ScaleFactoryClass')
const ArpeggioFactory = require('./ArpeggioClasses/ArpeggioFactoryClass')



class MusicElementInterface {
	constructor(){
		this.ChordFactory = new ChordFactory() 
		this.ScaleFactory = new ScaleFactory() 
		this.ArpeggioFactory = new ArpeggioFactory() 
	}

	getChord(level){
		return this.ChordFactory.createChord(level)
	}

	getScale(level){
		return this.ScaleFactory.createScale(level)
	}

	getArpeggio(level){
		return this.ArpeggioFactory.createArpeggio(level)
	}

	getBeginnerChord(){
		return this.ChordFactory.createChord('beginner')
	}

	getIntermediateChord(){
		return this.ChordFactory.createChord('intermediate')
	}

	getBeginnerScale(){
		return this.ScaleFactory.createScale('beginner')
	}

	getIntermediateScale(){
		return this.ScaleFactory.createScale('intermediate')
	}

	getBeginnerArpeggio(){
		return this.ArpeggioFactory.createArpeggio('beginner')
	}

	getIntermediateArpeggio(){
		return this.ArpeggioFactory.createArpeggio('intermediate')
	}

}

module.exports = MusicElementInterface