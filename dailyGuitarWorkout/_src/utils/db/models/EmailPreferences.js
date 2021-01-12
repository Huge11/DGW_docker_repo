import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var emailPreferencesSchema = new Schema({
  uid: String,

  learnTheFretBoard: {
    section: {type: Boolean, default: false},
    noteAndString: {type: Boolean, default: false},
  },
  
  scales: {
    section: {type: Boolean, default: false},
    beginner: {type: Boolean, default: false},
    intermediate: {type: Boolean, default: false},
  },

  arpeggios: {
    section: {type: Boolean, default: false},
    beginner: {type: Boolean, default: false},
    intermediate: {type: Boolean, default: false}
  },

  chords: {
    section: {type: Boolean, default: false},
    beginner: {type: Boolean, default: false},
    intermediate: {type: Boolean, default: false}
  },
  
  songsToLearn: {
    section: {type: Boolean, default: false},
    beginnerAndIntermediate: {type: Boolean, default: false},
    beginner: {type: Boolean, default: false},
    intermediate: {type: Boolean, default: false}
  },
});


const EmailPreferences = mongoose.model('EmailPreferences', emailPreferencesSchema)

export default EmailPreferences;