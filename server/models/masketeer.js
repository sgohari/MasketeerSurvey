let mongoose = require('mongoose');

// create a model class
let masketeerSchema = mongoose.Schema({
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String
},
{
    collection: "masketeer"
});

module.exports = mongoose.model('masketeer', masketeerSchema);