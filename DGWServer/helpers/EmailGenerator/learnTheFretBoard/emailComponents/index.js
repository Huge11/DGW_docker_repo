// const learnTheFretBoardHeader 	= require('./learnTheFretBoardHeader')
// const noteAndString				= require('./noteAndString')



// module.exports = {
// 	noteAndString,
// 	learnTheFretBoardHeader
// }

const fs = require("fs").promises


const files = {
	header: `${__dirname}/learnTheFretBoardHeader.html`,
	noteAndString: `${__dirname}/noteAndString.html`,

}



const keys = Object.keys(files)
keys.forEach(key=>{
	files[key] = fs.readFile(files[key], 'utf8')
})


module.exports = files
