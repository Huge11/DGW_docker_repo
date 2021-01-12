

module.exports = class Scale {
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



// class Scale {
// 	constructor({quality, position, noteName, level}){
// 	    this.allQualities = ['major', 'minorPentatonic', 'harmonicMinor', 'naturalMinor', 'blues']
// 	    this.levels = {'beginner': ['major', 'minorPentatonic', 'naturalMinor'], 'intermediate': ['major', 'minorPentatonic', 'harmonicMinor', 'naturalMinor', 'blues']}
// 	    this.qualities = this.validateLevel(level) ? this.levels[level] : this.allQualities

// 		this.position = this.validatePosition(position) ? position : Random.getRandom(4)+1;
// 		this.noteName = new NoteName(noteName).getNoteName()
// 		// this.noteName = this.validateNoteName(noteName) ? noteName : this.noteNames[Random.getRandom(this.noteNames.length)]
// 		this.quality = this.validateQuality(quality) ? quality : this.qualities[Random.getRandom(this.qualities.length)];

// 	}

// 	validateLevel(level){
// 		return typeof level != 'string' || this.levels.indexOf(level) == -1 ? false : true
// 	}

// 	validatePosition(position){
// 		return typeof position != "number" || position < 1 || position > 5 ? false : true 		
// 	}

// 	validateNoteName(noteName){
// 	    return typeof noteName != 'string' || this.NoteNames.indexOf(noteName) == -1 ? false : true
// 	}

// 	validateQuality(quality){
// 		return typeof quality != 'string' || this.allQualities.indexOf(quality == -1) ? false : true
// 	}
// }






// module.exports = Scale