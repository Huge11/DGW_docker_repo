const Components = require('./emailComponents')


class songsToLearnHeaderClass{

	renderSection(){
		return this.generateSongsToLearnHeader()
	}

	async generateSongsToLearnHeader(){
		return Components.header
	}

}




module.exports = songsToLearnHeaderClass