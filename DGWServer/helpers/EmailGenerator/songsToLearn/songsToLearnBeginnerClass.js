const Components = require('./emailComponents')


class songsToLearnBeginnerClass{

	renderSection(){
		return this.generateSongsToLearnBeginner()
	}

	async generateSongsToLearnBeginner(){
		let htmlSection = await Components.songsToLearn()
		return htmlSection
	}

}




module.exports = songsToLearnBeginnerClass