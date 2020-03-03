const express = require('express');
const router = express.Router();
const {
    TestQuestionsForm,
    TestQuestionsGet,
    TestQuestionsDelete,
    BeginnerQuestionsForm,
    BegginerQuestionGet,
    begginerQuestionDelete,
    AdvanceQuestionForm,
    AdvanceQuestionGet,
    AdvanceQuestionDelete
} = require('../controllers/adminTestExamController.');

router.post('/profile/adminDashboard/testExam', TestQuestionsForm);

router.get('/profile/adminDashboard/testExam', TestQuestionsGet);

router.delete('/profile/adminDashboard/testExam/deleteQuestion/:id', TestQuestionsDelete);

router.post('/profile/adminDashboard/beginnerExam', BeginnerQuestionsForm);

router.get('/profile/adminDashboard/beginnerExam', BegginerQuestionGet);

router.delete('/profile/adminDashboard/beginnerExam/deleteQuestion/:id', begginerQuestionDelete);

router.post('/profile/adminDashboard/advanceExam', AdvanceQuestionForm);

router.get('/profile/adminDashboard/advanceExam', AdvanceQuestionGet);

router.delete('/profile/adminDashboard/advanceExam/deleteQuestion/:id', AdvanceQuestionDelete);

module.exports = router;