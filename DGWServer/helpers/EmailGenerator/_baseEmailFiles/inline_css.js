const juice = require('juice')
const fs = require('fs')
let htmlString = require(`${__dirname}/fullEmailHtmlString.js`)
// let cssString = require(`${__dirname}/fullEmailCssString.js`)
// console.log(cssString)


var html = juice(htmlString)

	fs.writeFile(`${__dirname}/output.html`, html, (err)=>{
    	if(err) throw err
    })

