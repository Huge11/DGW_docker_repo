const {noteAndString, learnTheFretBoardHeader} = require('./learnTheFretBoard')
const {scales, scalesBeginner, scalesIntermediate, scalesHeader} = require('./scales')
const {arpeggios, arpeggiosBeginner, arpeggiosIntermediate, arpeggiosHeader} = require('./arpeggios')
const {chords, chordsBeginner, chordsIntermediate, chordsHeader} = require('./chords')
const {songsToLearnBeginner, songsToLearnIntermediate, songsToLearnHeader, songsToLearnBeginnerAndIntermediate} = require('./songsToLearn')
const {footer, header} = require('./generalSections')



function emailElementFactory(elementType, section){

	switch(elementType){
		case 'general':
			switch(section){
				case 'header':
					return new header();
					break;
				case 'footer':
					return new footer();
					break;
			}
		case 'learnTheFretBoard':
			switch(section){
				case 'header':
					return new learnTheFretBoardHeader();
					break;
				case 'noteAndString':
					return new noteAndString()
					break;
				default:
					break;
			}
		case 'scales':
			switch(section){
				case 'header':
					return new scalesHeader();
					break;
				case 'beginner':
					return new scales('beginner');
					break;
				case 'intermediate': 
					return new scales('intermediate');
					break;
			}
		case 'arpeggios':
			switch(section){
				case 'header':
					return new arpeggiosHeader();
					break;
				case 'beginner':
					return new arpeggios('beginner');
					break;
				case 'intermediate': 
					return new arpeggios('intermediate');
					break;
			}
		case 'chords':
			switch(section){
				case 'header':
					return new chordsHeader();
					break;
				case 'beginner':
					return new chords("beginner");
					break;
				case 'intermediate':
					return new chords("intermediate");
					break;
			}
		case 'songsToLearn':
			switch(section){
				case 'header':
					return new songsToLearnHeader();
					break;		
				case 'beginnerAndIntermediate':
					return new songsToLearnBeginnerAndIntermediate;
					break;		
				case 'beginner':
					return new songsToLearnBeginner();
					break;
				case 'intermediate':
					return new songsToLearnIntermediate();
					break;
			}
		default:
			break;
	}



}

module.exports = emailElementFactory