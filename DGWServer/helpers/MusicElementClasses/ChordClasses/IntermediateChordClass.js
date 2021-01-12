const Chord = require('./ChordClass')
const appConfig = require('../../get-config')

const {Random} = require('random-js')
const random = new Random()

var fs = require('fs')
var directories = fs.readdirSync(__dirname+'/../../../public/images/diagrams/chords/caged/')



const trimFileType = (string)=>{
	return string.substring(0, string.indexOf('.'))
}


class IntermediateChord extends Chord{
	constructor(){
		super()
		this.directory = directories[random.integer(0, directories.length - 1)]
		const chords = fs.readdirSync(__dirname+`/../../../public/images/diagrams/chords/caged/${this.directory}/`)
		const cagedChords = chords.map(name => trimFileType(name))

		this.chordName = cagedChords[random.integer(0, cagedChords.length -1)]
	}

	getImageUrl(){
		let baseUrl = 'http://dailyguitarworkout.com'
		if(process.env.NODE_ENV == 'Development'){
			baseUrl = 'http://192.168.1.126:3001'
		}
		const url = `${baseUrl}/images/diagrams/chords/caged/${this.directory}/` + `${this.chordName}.jpg`
		return url
	}

	getFormattedName(){
		let name = this.chordName;
		let noteName = ''
		let quality = this.directory
		if(name.charAt(1) == ('b' || '#')){
			noteName = name.slice(0,1);  
		}else{
			noteName = name.charAt(0); 
		}
		let formattedName = `${noteName} `
		switch(quality){
			case 'Major':
				formattedName += 'Major'
				break
			case 'Minor':
				formattedName += 'Minor'
				break
			case 'Dom7':
				formattedName += 'Dominant 7th'
				break
			case 'Maj7':
				formattedName += 'Major 7th'
				break
			case 'Min7':
				formattedName += 'Minor 7th'
				break
			default:
				formattedName += quality
		}
		formattedName += ' Chord'
		return formattedName

	}
}

module.exports = IntermediateChord