const { User, Thought } = require('../models');

const ThoughtController = {
    getThoughts(req, res) {
        Thought.find()
        .then(() => res.json())
    }
}