// const arpeggiosHeader 			= require('./arpeggiosHeader')
// const arpeggiosSection 		= require('./arpeggiosSection')
// const imageRight 		= require('./imageRight')
// const imageLeft 		= require('./imageLeft')
// const sectionHead 		= require('./sectionHead')


// module.exports = {
// 	arpeggiosHeader,
// 	arpeggiosSection,
// 	imageRight,
// 	imageLeft,
// 	sectionHead
// }
const fs = require("fs").promises


const files = {
	header: `${__dirname}/header.html`,
	sectionHead: `${__dirname}/sectionHead.html`,
	imageLeft: `${__dirname}/imageLeft.html`,
	imageRight: `${__dirname}/imageRight.html`
}



const keys = Object.keys(files)
keys.forEach(key=>{
	files[key] = fs.readFile(files[key], 'utf8')
})


module.exports = files
