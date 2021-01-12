const BeginnerChord = require('./BeginnerChordClass')
const IntermediateChord = require('./IntermediateChordClass')



module.exports = class ChordFactory {
	createChord(data){
		switch(data){
			case 'beginner':
				return new BeginnerChord(); 
				break;
			case 'intermediate':
				return new IntermediateChord(); 
				break;
			default:
				return new IntermediateChord()
		}
	}
}