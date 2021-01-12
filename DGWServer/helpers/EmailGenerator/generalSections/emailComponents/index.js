const fs = require('fs').promises

const files = {
	betaLaunch: `${__dirname}/betaLaunch.html`,
	adContent: `${__dirname}/adContent.html`,
	banner: `${__dirname}/banner.html`,
	dailySongFact: `${__dirname}/dailySongFact.html`,
	greyBreak: `${__dirname}/greyBreak.html`,
	header: `${__dirname}/header.html`,
	preHeader: `${__dirname}/preHeader.html`,
	quote: `${__dirname}/quote.html`,
	socialMedia: `${__dirname}/socialMedia.html`,
	footer: `${__dirname}/footer.html`,
	footQuote: `${__dirname}/footQuote.html`,
	emailWrapper: `${__dirname}/emailWrapper.html`
}



const keys = Object.keys(files)
keys.forEach(key=>{
	files[key] = fs.readFile(files[key], 'utf8')
})


module.exports = files