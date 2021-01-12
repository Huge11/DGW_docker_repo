const Random = require('./Random')

class Position{
	constructor(elementPosition=0){
		this.positions = [1, 2, 3, 4, 5]

		this.elementPosition = this.validatePosition(elementPosition) ? elementPosition : this.getRandomPosition()

	}

	getRandomPosition(){
		let num = Random.getRandom(this.positions.length)
		return this.positions[num] 
	}

	setRandomPosition(){
		this.elementPosition = this.getRandomPosition()
	}

	getPosition(){
		return this.elementPosition
	}

	setPosition(position=0){
		this.elementPosition = this.validatePosition(position) ? position : this.getRandomPosition()
	}

	validatePosition(position){
		if(typeof position !== "number"){return false} 		
		let valid = this.positions.indexOf(position)
		return valid !== -1 ? true : false
	}

}

module.exports = Position