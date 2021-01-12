const BeginnerArpeggio = require('./BeginnerArpeggioClass')
const IntermediateArpeggio = require('./IntermediateArpeggioClass')



module.exports = class ArpeggioFactory {
	createArpeggio(data){
		switch(data){
			case 'beginner':
				return new BeginnerArpeggio(); 
				break;
			case 'intermediate':
				return new IntermediateArpeggio(); 
				break;
			default:
				return new IntermediateArpeggio()
		}
	}
}