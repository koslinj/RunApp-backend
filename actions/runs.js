const Run = require('../db/models/run')

module.exports = {
    saveRun(req, res) {
        const newRun = new Run({ paceInSeconds: 300, kilometers: 5, name: 'Janek' })

        newRun.save().then(() => {
            console.log('bieg został zapisany!');
        });
    }
}