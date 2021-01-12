const Arpeggio = require('./ArpeggioClass')
const appConfig = require('../../get-config')
const {Random} = require('random-js')
const random = new Random()

var fs = require('fs')
var directories = ['Major', 'Minor']//fs.readdirSync(__dirname+'/../../../public/images/diagrams/scales')
// console.log(directories)

const trimFileType = (string)=>{
	return string.substring(0, string.indexOf('.'))
}


module.exports = class BeginnerArpeggio extends Arpeggio{
	constructor(){
		super()
		this.directory = directories[random.integer(0, directories.length - 1)]
		const arpeggioFiles = fs.readdirSync(__dirname+`/../../../public/images/diagrams/arpeggios/${this.directory}/`)
		const arpeggios = arpeggioFiles.map(name => trimFileType(name))

		this.arpeggioName = arpeggios[random.integer(0, arpeggios.length -1)]
	}

	getImageUrl(){
		let baseUrl = 'http://dailyguitarworkout.com'
		if(process.env.NODE_ENV == 'Development'){
			baseUrl = 'http://192.168.1.126:3001'
		}
		const url = `${baseUrl}/images/diagrams/arpeggios/${this.directory}/${this.arpeggioName}.jpg`
		return url
	}

	getFormattedName(){
		let name = this.arpeggioName;
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
			case 'Maj7':
				formattedName += 'Major 7th'
				break
			case 'Min7':
				formattedName += 'Minor 7th'
				break
			case 'Dom7':
				formattedName += 'Dominant 7th'
				break
			default:
				formattedName += quality
		}
		formattedName += ' Arpeggio'
		return formattedName

	}
}
