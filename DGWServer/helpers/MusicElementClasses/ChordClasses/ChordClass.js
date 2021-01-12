


module.exports = class Chord {
	constructor(){}

	getImageUrl(){} // impliment in subclass

	getFormattedName(){} // impliment in subclass

	getDescription(){
		const description = 'The red note indicates the root note (the note the chord is named for).  The left most string is the Low E String(top string).  Either the fingering or the notes have been included.  '
		return description
	}
}



















// const Random = require('./Random')
// // const NoteName = require('./NoteNameClass')
// const appConfig = require('../get-config')

// // begininer shoul only return open chords
// // intermediate should return any chord
// // advanced include diminished/augmented


// const allQualities = {
// 	'quality': ['major', 'minor', 'dominant7', 'major7', 'minor7'],
// 	'type': ['open', 'barre']
// }

// const levels = {
// 	'beginner': {
// 		// 'quality': ['major', 'minor'], 
// 		'type': ['open'],

// 	}, 
// 	'intermediate': {
// 		// 'quality': ['major', 'minor', 'dominant7', 'major7', 'minor7'], 
// 		'type': ['caged']
// 	}
// }


// class Chord {
// 	constructor({quality, position, noteName, level, chordType}){
// 	    this.level = this.validateLevel(level) ? level : 'intermediate'
// 	    this.type = this.levels[level].type[0]



// 	    // this.qualities = level != undefined ? levels[level] : allQualities

// 		// this.quality = this.validateQuality(quality) ? quality : this.qualities.quality[Random.getRandom(this.qualities.quality.length)];
// 		// this.chordType = this.validateChordType(chordType) ? chordType : this.qualities.type[Random.getRandom(this.qualities.type.length)];
// 	}

	

// 	getImageUrl(){
// 		let baseUrl = 'http://dailyguitarworkout.com'
// 		if(appConfig.envName == 'Development'){
// 			baseUrl = 'http://localhost:3001'
// 		}
// 		const url = `${baseUrl}/images/diagrams/chords/` + `${this.chordType}/${this.getChordName()}.png`
// 		return url
// 	}

// 	validateLevel(level){
// 		return typeof level != 'string' || Object.keys(levels).indexOf(level) == -1 ? false : true
// 	}

// 	validateQuality(quality){
// 		return typeof quality != 'string' || allQualities.quality.indexOf(quality) == -1 ? false : true
// 	}

// 	validateChordType(chordType){
// 		return typeof chordType != 'string' || allQualities.type.indexOf(chordType) == -1 ? false : true
// 	}

// 	getFormattedName(){
// 		let name = `${this.noteName} `

// 		switch(this.quality){
// 			case 'major':
// 				name+='Major'; break;
// 			case 'minor':
// 				name += 'Minor'; break;
// 			case 'major7':
// 				name += 'Major 7th'; break;
// 			case 'minor7':
// 				name += 'Minor 7th'; break;
// 			case 'dominant7':
// 				name += 'Dominant 7th'; break;
// 			default:
// 				console.log('hit format default case')
// 		}
// 		return name
// 	}

// 	getChordName(){
// 		let name = `${this.noteName}`

// 		switch(this.quality){
// 			case 'major':
// 				break;
// 			case 'minor':
// 				name += 'm'; break;
// 			case 'major7':
// 				name += 'maj7'; break;
// 			case 'minor7':
// 				name += 'm7'; break;
// 			case 'dominant7':
// 				name += '7'; break;
// 			default:
// 				console.log('hit chord name default case')
// 		}
// 		return name
// 	}

	


// }






// module.exports = Chord