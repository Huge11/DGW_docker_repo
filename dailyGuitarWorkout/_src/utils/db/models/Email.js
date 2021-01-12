  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var emailSchema = new Schema({
      email: {
        type: String,
        required: true,
        unique: true
      }
  });



emailSchema.path('email').validate(function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email); // Assuming email has a text attribute
}, 'The e-mail field cannot be empty.')


const Email = mongoose.model('Email', emailSchema)

module.exports = Email