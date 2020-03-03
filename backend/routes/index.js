const router = require('express').Router();
const { updateAdvancedScore, updateBeginnerScore, updateTestScore, updateCategories } = require('../controllers/examControllers');

router.get('/', (req, res, next) => {
    res.status(200).json({ msg: 'Working' });
});

router.put('/exams/advanceExam/:id', updateAdvancedScore);

router.put('/exams/beginnerExam/:id', updateBeginnerScore);

router.put('/exams/testExam/:id', updateTestScore);

router.put('/profile/selectFavouriteCategories/:id', updateCategories)

module.exports = router;