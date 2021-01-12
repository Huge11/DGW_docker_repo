



module.exports = class Arpeggio {
	constructor(){
		
	}

	getImageUrl(){}

	getFormattedName(){}

	getDescription(){
		const description = 'The red note indicates the root note, you should start the arpeggio from the root note.  The numbers indicate the finger you should use to play the note.'
		return description
	}
}

















// const Random = require('./Random')
// const NoteName = require('./NoteNameClass')
// const Position = require('./PositionClass')

// const allQualities = ['major', 'minor', 'dominant7', 'major7', 'minor7']
// const levels = {
// 	'beginner': ['major', 'minor'], 
// 	'intermediate': ['major', 'minor', 'dominant7', 'major7', 'minor7']
// }



// class Arpeggio {
// 	constructor({quality, position, noteName, level}){
// 	    this.qualities = this.validateLevel(level) ? levels[level] : allQualities

// 		this.position = new Position(position).getPosition()
// 		this.noteName = new NoteName(noteName).getNoteName()
// 		this.quality = this.validateQuality(quality) ? quality : this.qualities[Random.getRandom(this.qualities.length)];

// 	}

// 	validateLevel(level){
// 		return typeof level != 'string' || Object.keys(levels).indexOf(level) == -1 ? false : true
// 	}


// 	validateQuality(quality){
// 		return typeof quality != 'string' || allQualities.indexOf(quality) == -1 ? false : true
// 	}
// }






// module.exports = Arpeggio