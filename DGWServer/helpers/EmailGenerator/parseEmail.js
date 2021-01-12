
const fs = require('fs').promises
const cheerio = require('cheerio')


	// $("#emailWrapper"),


fs.readFile(`${__dirname}/emailHtml.html`, 'utf8').then(html=>{
	let $ = cheerio.load(html)

	let sections = {
		generalSections: {},
		arpeggios: {},
		scales: {},
		chords: {},
		songsToLearn: {},
		learnTheFretBoard: {}
	}

// console.log($.data('emailSection'))

	const keys = Object.keys(sections)
	keys.forEach(key=>{
		$(`.${key}`).each((i,element)=>{
			sections[key][$(element).data("email-section")] = $.html($(element).closest('table'))
		})

	})
		// console.log(sections.generalSections.preheader)


	// console.log(sections.generalSections.preheader)

	const sectionKeys = Object.keys(sections)
	sectionKeys.forEach(sectionKey=>{
		const fileNames = Object.keys(sections[sectionKey])
		fileNames.forEach(fileName=>{
			// if(!sections[sectionKey][fileName]){return}
			fs.writeFile(`${__dirname}/${sectionKey}/emailComponents/${fileName}.html`, sections[sectionKey][fileName])
			.then(console.log(`${sectionKey}:${fileName} written`))
			.catch(e=>console.log(e))
		})


	})
})
.catch(e=>console.log(e))











	// const sections1 = {
	// 	generalSections: {
	// 		preheader : $("table").filter(".generalSections").html("#preheader"),
	// 		header : $.html("#generalSections.header"),
	// 		banner : $("#generalSections.banner"),
	// 		betaLaunch : $("#generalSections.betaLaunch"),
	// 		quote : $("#generalSections.quote"),
	// 		adContent : $("#generalSections.adContent"),
	// 		dailySongFact : $("#generalSections.dailySongFact"),
	// 		footer : $("#generalSections.footer"),
	// 		footer : $("#generalSections.socialMedia"),
	// 		footer : $("#generalSections.footQuote"),
	// 		greyBreak : $("#generalSections.greyBreak"),
	// 	},
	// 	arpeggios: {
	// 		header		:	$("#arpeggios.header"),
	// 		imageLeft	:	$("#arpeggios.imageLeft"),
	// 		imageRight	:	$("#arpeggios.imageRight"),
	// 		sectionHead	:	$("#arpeggios.sectionHead"),
	// 	},
	// 	scales: {
	// 		header		:	$("#scales.header"),
	// 		imageLeft	:	$("#scales.imageLeft"),
	// 		imageRight	:	$("#scales.imageRight"),
	// 		sectionHead	:	$("#scales.sectionHead"),
	// 	},
	// 	chords: {
	// 		header		:	$("#chords.header"),
	// 		section		:	$("#chords.section"),
	// 		sectionHead	:	$("#chords.sectionHead"),
	// 	},
	// 	songsToLearn: {
	// 		header					:	$("#songsToLearn.header"),
	// 		beginnerAndIntermediate :	$("#songsToLearn.beginnerAndIntermediate"),
	// 	},
	// 	learnTheFretBoard: {
	// 		header			:	$("#learnTheFretBoard.header"),
	// 		noteAndString 	:	$("#learnTheFretBoard.noteAndString"),
	// 	}
	// }