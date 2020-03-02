const express = require('express');
const router = express.Router();
const TestQuestion = require('../models/TestQuestions');
const { TestQuestionsForm, TestQuestionsGet } = require('../controllers/adminTestExamController.');

router.post('/profile/adminDashboard/testExam', TestQuestionsForm);

router.get('/profile/adminDashboard/testExam', TestQuestionsGet);

module.exports = router;