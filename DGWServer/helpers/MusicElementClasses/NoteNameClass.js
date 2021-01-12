const Random = require('./Random')


class NoteName{
	constructor(elementNoteName=""){
		this.NoteNames = ['A','B','C','D','E','F','G'];
		this.allNoteNames = ['Ab','A','A#','Bb','B','C','C#','Db','D','D#','Eb','E','F','F#','Gb','G','G#']


		this.elementNoteName = this.validateNoteName(elementNoteName) ? elementNoteName : this.getRandomNoteName()

	}

	getRandomNoteName(){
		let num = Random.getRandom(this.NoteNames.length)
		return this.NoteNames[num] 
	}

	setRandomNoteName(){
		this.elementNoteName = this.getRandomNoteName()
	}

	getNoteName(){
		return this.elementNoteName
	}

	setNoteName(NoteName=""){
		this.elementNoteName = this.validateNoteName(NoteName) ? NoteName : this.getRandomNoteName()
	}

	validateNoteName(noteName){
		return typeof noteName !== "string" || this.NoteNames.indexOf(noteName) == -1 ? false : true
	}

	getNoteNames(){
		return this.NoteNames
	}

}

module.exports = NoteName