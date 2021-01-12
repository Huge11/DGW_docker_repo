var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')
var Schema = mongoose.Schema;

var userSchema = new Schema({
  uid: String,
  firstName: {type: String, default: "John"},
  lastName: {type: String, default: "Doe"},  
  photoURL: {type: String, default: "https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png"},
  displayName: {type: String, default: "New User"},
  emails: {type: Array, default: []},
  primaryEmail: String,
  created: {type: Date, default: Date.now},
  timeZone: String,
  emailMeAt: {minute: {type: String, default: '00'}, hour: {type: String, default: '10'}},
  dontEmailMe: {type: Boolean, default: false}
});

userSchema.plugin(findOrCreate)
userSchema.virtual('fullName').get(()=>{
	return this.firstName + ' ' + this.lastName
})
userSchema.virtual('emailTime').get(()=>{
	return this.emailMeAt.hour + ":" + this.emailMeAt.minute + ' ' + this.timeZone
})

const User = mongoose.model('User', userSchema)

module.exports = User