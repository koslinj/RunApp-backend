const mongoose = require('mongoose');

const RunSchema = new mongoose.Schema({
    paceInSeconds: {
        type: Number,
        required: true,
    },
    kilometers: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
})

const Run = mongoose.model('Run', RunSchema)

module.exports = Run;