const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username: "string",
    Email: "string",
    Mobile: "number",
    Password: "string",
    ConfirmPassword:"string",
    
})

module.exports = mongoose.model('User', UserSchema);

