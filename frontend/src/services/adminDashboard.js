import axios from 'axios';

const baseURL = 'http://localhost:3000';

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
    }
}

export default ADMIN_SERVICE;