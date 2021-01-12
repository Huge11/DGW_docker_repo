// const chordsHeader 	= require('./chordsHeader')
// const chordsSection = require('./chordsSection')
// const sectionHead = require('./sectionHead')


// module.exports = {
// 	chordsSection,
// 	chordsHeader,
// 	sectionHead
// }


const fs = require("fs").promises


const files = {
	header: `${__dirname}/header.html`,
	sectionHead: `${__dirname}/sectionHead.html`,
	chordsSection: `${__dirname}/section.html`,
	// imageRight: `${__dirname}/imageRight.html`
}



const keys = Object.keys(files)
keys.forEach(key=>{
	files[key] = fs.readFile(files[key], 'utf8')
})


module.exports = files
