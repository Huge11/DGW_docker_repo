const BeginnerScale = require('./BeginnerScaleClass')
const IntermediateScale = require('./IntermediateScaleClass')



module.exports = class ScaleFactory {
	createScale(data){
		switch(data){
			case 'beginner':
				return new BeginnerScale(); 
				break;
			case 'intermediate':
				return new IntermediateScale(); 
				break;
			default:
				return new IntermediateScale()
		}
	}
}