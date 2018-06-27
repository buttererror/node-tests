const db = require('./db');

module.exports.handleSignUp = (email, password) => {
   // check if the email already exist
   db.saveUser({email, password});
   //send the welcome email
};