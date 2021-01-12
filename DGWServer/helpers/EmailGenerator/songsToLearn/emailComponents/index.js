// const songsToLearnHeader 	= require('./songsToLearnHeader')
// const songsToLearn 	= require('./songsToLearn')




// module.exports = {
// 	songsToLearnHeader,
// 	songsToLearn
// }
const fs = require("fs").promises


const files = {
	header: `${__dirname}/songsToLearnHeader.html`,
	songsToLearn: `${__dirname}/songsToLearn.html`,
	// imageLeft: `${__dirname}/imageLeft.html`,
	// imageRight: `${__dirname}/imageRight.html`
}



const keys = Object.keys(files)
keys.forEach(key=>{
	files[key] = fs.readFile(files[key], 'utf8')
})


module.exports = files
