const TestQuestions = require('../models/TestQuestions');
const BeginnerQuestions = require('../models/BeginnerQuestions');
const AdvancedQuestions = require('../models/AdvancedQuestion');

exports.TestQuestionsForm = async(req, res) => {
    const { TestQuestion, TestAnswer1, TestAnswer2, TestAnswer3, TestAnswer4, TestCorrectAnswer } = req.body;
    const data = {
        content: TestQuestion,
        options: [TestAnswer1, TestAnswer2, TestAnswer3, TestAnswer4],
        answer: TestCorrectAnswer
    }
    await TestQuestions.create(data);
    res.json({ ok: true, data });
}

exports.TestQuestionsGet = async(req, res) => {
    const getQuestionsTestExam = await TestQuestions.find().sort({ createdAt: -1 });
    res.json({ ok: true, getQuestionsTestExam });
}

exports.TestQuestionsDelete = async(req, res) => {
    const { id } = req.params;
    await TestQuestions.findByIdAndDelete(id);
    res.json({ ok: true, message: 'Test question deleted succesfully' });
}

exports.BeginnerQuestionsForm = async(req, res) => {
    const { BeginnerQuestion, BeginnerAnswer1, BeginnerAnswer2, BeginnerAnswer3, BeginnerAnswer4, BeginnerCorrectAnswer } = req.body;
    const data = {
        content: BeginnerQuestion,
        options: [BeginnerAnswer1, BeginnerAnswer2, BeginnerAnswer3, BeginnerAnswer4],
        answer: BeginnerCorrectAnswer
    }
    await BeginnerQuestions.create(data);
    res.json({ ok: true, data });
}

exports.BegginerQuestionGet = async(req, res) => {
    const getQuestionsBegginerExam = await BeginnerQuestions.find().sort({ createdAt: -1 })
    res.json({ ok: true, getQuestionsBegginerExam });
}

exports.begginerQuestionDelete = async(req, res) => {
    const { id } = req.params;
    await BeginnerQuestions.findByIdAndDelete(id);
    res.json({ ok: true, message: 'Begineer Question deleted succesfully' });
}

exports.AdvanceQuestionForm = async(req, res) => {
    const { AdvanceQuestion, AdvanceAnswer1, AdvanceAnswer2, AdvanceAnswer3, AdvanceAnswer4, AdvanceCorrectAnswer } = req.body;
    const data = {
        content: AdvanceQuestion,
        options: [AdvanceAnswer1, AdvanceAnswer2, AdvanceAnswer3, AdvanceAnswer4],
        answer: AdvanceCorrectAnswer
    }
    await AdvancedQuestions.create(data);
    res.json({ ok: true, data });
}

exports.AdvanceQuestionGet = async(req, res) => {
    const getQuestionsAdvanceExam = await AdvancedQuestions.find().sort({ createdAt: -1 });
    res.json({ ok: true, getQuestionsAdvanceExam });
}

exports.AdvanceQuestionDelete = async(req, res) => {
    const { id } = req.params;
    await AdvancedQuestions.findByIdAndDelete(id);
    res.json({ ok: true, message: 'Begineer Question deleted succesfully' });
}