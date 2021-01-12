const Chord = require('./ChordClass')
const appConfig = require('../../get-config')

const {Random} = require('random-js')
const random = new Random()

var fs = require('fs')
var files = fs.readdirSync(__dirname+'/../../../public/images/diagrams/chords/open/')

const trimPNG = (string)=>{
	return string.substring(0, string.indexOf('.'))
}
const openChords = files.map(name => trimPNG(name))

class BeginnerChord extends Chord{
	constructor(){
		super()
		this.chordName = openChords[random.integer(0, openChords.length -1)]
	}

	getImageUrl(){
		let baseUrl = 'http://dailyguitarworkout.com'
		if(process.env.NODE_ENV == 'Development'){
			baseUrl = 'http://192.168.1.126:3001'
		}
		const url = `${baseUrl}/images/diagrams/chords/open/` + `${this.chordName}.png`
		return url
	}

	getFormattedName(){
		let name = this.chordName;
		let noteName = ''
		let quality = ''
		if(name.charAt(1) == ('b' || '#')){
			noteName = name.slice(0,1); 
			quality = name.substr(2) 
		}else{
			noteName = name.charAt(0); 
			quality = name.substr(1)
		}
		let formattedName = `${noteName} `
		switch(quality){
			case '':
				formattedName += 'Major'
				break
			case 'm':
				formattedName += 'Minor'
				break
			case '7':
				formattedName += 'Dominant 7th'
				break
			case 'maj7':
				formattedName += 'Major 7th'
				break
			case 'm7':
				formattedName += 'Minor 7th'
				break
			default:
				formattedName += quality
		}
		formattedName += ' Chord'
		return formattedName

	}
}

module.exports = BeginnerChord