const Components = require('./emailComponents')


class songsToLearnBeginnerAndIntermediateClass{

	renderSection(){
		return this.generateSongsToLearnBeginner()
	}

	async generateSongsToLearnBeginner(){
		return Components.songsToLearn
	}

}




module.exports = songsToLearnBeginnerAndIntermediateClass