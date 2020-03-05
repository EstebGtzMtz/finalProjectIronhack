import axios from 'axios';

const baseURL = 'http://localhost:3000';
//https://finalprojectironhackmodule3.herokuapp.com


const MY_SERVICE = axios.create({
    baseURL,
    withCredentials: true
});

const ADMIN_SERVICE = {
    exam: async data => {
        return await MY_SERVICE.post('/profile/adminDashboard/testExam', data);
    },
    getTestExamQuestion: async() => {
        const { data } = await MY_SERVICE.get('/profile/adminDashboard/testExam');
        return data;
    },
    deleteTestExamQuestion: async id => {
        return await MY_SERVICE.delete(`/profile/adminDashboard/testExam/deleteQuestion/${id}`);
    },
    postBeginnerExam: async data => {
        return await MY_SERVICE.post('/profile/adminDashboard/beginnerExam', data);
    },
    getBeginnerExamQuestion: async() => {
        const { data } = await MY_SERVICE.get('/profile/adminDashboard/beginnerExam');
        return data;
    },
    deleteBeginnerExamQuestion: async id => {
        return await MY_SERVICE.delete(`/profile/adminDashboard/beginnerExam/deleteQuestion/${id}`)
    },
    postAdvanceExam: async data => {
        return await MY_SERVICE.post('/profile/adminDashboard/advanceExam', data);
    },
    getAdvanceExamQuestions: async() => {
        const { data } = await MY_SERVICE.get('/profile/adminDashboard/advanceExam');
        return data;
    },
    deleteAdvanceExamQuestion: async id => {
        return await MY_SERVICE.delete(`/profile/adminDashboard/advanceExam/deleteQuestion/${id}`);
    }
}

export default ADMIN_SERVICE;