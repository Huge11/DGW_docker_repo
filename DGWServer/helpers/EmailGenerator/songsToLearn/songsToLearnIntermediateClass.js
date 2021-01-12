const Components = require('./emailComponents')


class songsToLearnIntermediateClass{

	renderSection(){
		return this.generateSongsToLearnIntermediate()
	}

	async generateSongsToLearnIntermediate(){
		let htmlSection = await Components.songsToLearn()
		return htmlSection
	}

}




module.exports = songsToLearnIntermediateClass