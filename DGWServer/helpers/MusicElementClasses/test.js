const MusicElement = require('./MusicElementClass.js')

args = {
	'type': 'arpeggio', 
	'level': 'beginner',
	'position': 4,
	'chordType': 'barre',
	'noteName': 'B',
	'quality': 'major'
}

let element = new MusicElement(args)


console.log(element)