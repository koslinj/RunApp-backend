const mongoose = require('mongoose');

const Run = mongoose.model('Run', {
    paceInSeconds: Number,
    kilometers: Number,
    name: String
})

module.exports = Run;