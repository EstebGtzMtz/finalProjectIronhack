const express = require('express');
const router = express.Router();
const TestQuestion = require('../models/TestQuestions');
const { TestQuestionsForm } = require('../controllers/adminTestExamController.');

router.post('/profile/adminDashboard/testExam', TestQuestionsForm);

// router.post('/adminDashboard/:id/createCategory', (req, res)=>{
//     req
// })

module.exports = router;