const Scale = require('./ScaleClass')
const appConfig = require('../../get-config')
const {Random} = require('random-js')
const random = new Random()

var fs = require('fs')
var directories = ['majorScale', 'minorPent', 'blues']//fs.readdirSync(__dirname+'/../../../public/images/diagrams/scales')
// console.log(directories)

const trimFileType = (string)=>{
	return string.substring(0, string.indexOf('.'))
}


module.exports = class BeginnerScale extends Scale{
	constructor(){
		super()
		this.directory = directories[random.integer(0, directories.length - 1)]
		const scaleFiles = fs.readdirSync(__dirname+`/../../../public/images/diagrams/scales/${this.directory}/`)
		const scales = scaleFiles.map(name => trimFileType(name))

		this.scaleName = scales[random.integer(0, scales.length -1)]
	}

	getImageUrl(){
		let baseUrl = 'http://dailyguitarworkout.com'
		if(process.env.NODE_ENV == 'Development'){
			baseUrl = 'http://192.168.1.126:3001'
		}
		const url = `${baseUrl}/images/diagrams/scales/${this.directory}/` + `${this.scaleName}.jpg`
		return url
	}

	getFormattedName(){
		let name = this.scaleName;
		let noteName = ''
		let quality = this.directory
		if(name.charAt(1) == ('b' || '#')){
			noteName = name.slice(0,1);  
		}else{
			noteName = name.charAt(0); 
		}
		let formattedName = `${noteName} `
		switch(quality){
			case 'blues':
				formattedName += 'Blues'
				break
			case 'harmonicMinor':
				formattedName += 'Harmonic Minor'
				break
			case 'majorScale':
				formattedName += 'Major'
				break
			case 'minorPent':
				formattedName += 'Minor Pentatonic'
				break
			case 'naturalMinor':
				formattedName += 'Natural Minor'
				break
			default:
				formattedName += quality
		}
		formattedName += ' Scale'
		return formattedName

	}
}

