const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');
// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
// /api/users/:userId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).post(updateThought);
// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/:reactionId').delete(removeReaction)

module.exports = router;
