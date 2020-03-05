import axios from 'axios';

const baseURL = 'http://localhost:3000';
//https://finalprojectironhackmodule3.herokuapp.com

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials: true
});

const EXAM_SERVICE = {
    updateAdvanceExam: async(id, data) => {
        return await MY_SERVICE.put(`/exams/advanceExam/${id}`, { data });
    },
    updateBeginnerExam: async(id, data) => {
        return await MY_SERVICE.put(`/exams/beginnerExam/${id}`, { data });
    },
    updateTestExam: async(id, data) => {
        return await MY_SERVICE.put(`/exams/testExam/${id}`, { data });
    },
    updateCategories: async(id, data) => {
        return await MY_SERVICE.put(`/profile/selectFavouriteCategories/${id}`, { data })
    }
}

export default EXAM_SERVICE;