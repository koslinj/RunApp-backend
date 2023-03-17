const Run = require('../db/models/run')

class RunActions {

    async getAllRuns(req, res) {
        const doc = await Run.find({});
        res.json(doc);
    }

    async getRun(req, res) {
        const id = req.params.id;
        const doc = await Run.findById(id);
        res.json(doc);
    }

    async saveRun(req, res) {
        const paceInSeconds = req.body.paceInSeconds;
        const kilometers = req.body.kilometers;
        const name = req.body.name;

        let newRun;
        try {
            newRun = new Run({ paceInSeconds, kilometers, name });
            await newRun.save();
        } catch (err) {
            return res.status(422).send({message: err.message})
        }

        res.status(201).json(newRun);
    }

    async updateRun(req, res) {
        const paceInSeconds = req.body.paceInSeconds;
        const kilometers = req.body.kilometers;
        const name = req.body.name;
        const id = req.params.id;

        const run = await Run.findById(id);
        run.paceInSeconds = paceInSeconds;
        run.kilometers = kilometers;
        run.name = name;

        await run.save();

        res.status(201).json(run);
    }

    async deleteRun(req, res) {
        const id = req.params.id;
        await Run.deleteOne({ _id: id });
        res.status(204).send();
    }
}

module.exports = new RunActions();