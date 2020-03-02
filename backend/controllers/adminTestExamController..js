const TestQuestions = require('../models/TestQuestions');

exports.TestQuestionsForm = async(req, res) => {
    const { TestQuestion, TestAnswer1, TestAnswer2, TestAnswer3, TestAnswer4 } = req.body;
    const data = {
        content: TestQuestion,
        optionA: TestAnswer1,
        optionB: TestAnswer2,
        optionC: TestAnswer3,
        optionD: TestAnswer1
    }
    await TestQuestions.create(data);
    res.json({ ok: true, data });
}

exports.TestQuestionsGet = async(req, res) => {
    const getQuestionsTestExam = await TestQuestions.find().sort({ createdAt: -1 });
    res.json({ ok: true, getQuestionsTestExam });
}