import React, { Component, createContext } from 'react';
import {withRouter} from 'react-router-dom';
import AUTH_SERVICE from './services/auth';
import ADMIN_SERVICE from './services/adminDashboard'


export const MyContext = createContext();

class MyProvider extends Component {
  

    state={
        formSignup: {
            name: '',
            email: '',
            password: ''
        },
        formLogin: {
            email: '',
            password: ''
        },
        formTestExam:{
          TestQuestion:'',
          TestAnswer1:'',
          TestAnswer2:'',
          TestAnswer3:'',
          TestAnswer4:''
        },
        formBeginnerExam:{
          BeginnerQuestion:'',
          BeginnerAnswer1:'',
          BeginnerAnswer2:'',
          BeginnerAnswer3:'',
          BeginnerAnswer4:''
        },
        formAdvanceExam:{
          AdvanceQuestion:'',
          AdvanceAnswer1:'',
          AdvanceAnswer2:'',
          AdvanceAnswer3:'',
          AdvanceAnswer4:''
        },
        isLoggedIn: false,
        loggedUser:{},
        testQuestions:[],
        beginnerQuestions:[],
        advanceQuestions:[]
    }

    handleSignupInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
          ...prevState,
          formSignup: {
            ...prevState.formSignup,
            [name]: value
          }
        }))
      }

      handleLoginSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state.formLogin
        AUTH_SERVICE.login({ email, password })
          .then(({ data }) => {
            this.setState(prevState => ({
              ...prevState,
              formLogin: {
                email: '',
                password: ''
              },
              loggedUser: data.user,
              isLoggedIn: true
            }))
            this.props.history.push('/profile')
          })
          .catch(() => {
            alert(':(, chaleee')
          })
      }


      handleLoginInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
          ...prevState,
          formLogin: {
            ...prevState.formLogin,
            [name]: value
          }
        }))
      }

      handleTestExamInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
          ...prevState,
          formTestExam: {
            ...prevState.formTestExam,
            [name]: value
          }
        }))
      }
      
      handleBeginnerExamInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
          ...prevState,
          formBeginnerExam: {
            ...prevState.formBeginnerExam,
            [name]: value
          }
        }))
      }

      handleAdvanceExamInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
          ...prevState,
          formAdvanceExam: {
            ...prevState.formAdvanceExam,
            [name]: value
          }
        }))
      }
      
      handleSignupSubmit = async e => {
        e.preventDefault()
        const data = this.state.formSignup
        this.setState({formSignup: {name: '', email: '', password: ''}})
        return await AUTH_SERVICE.signup(data)
      }

      handleTestExamSubmit = async e =>{
        e.preventDefault()
        const data = this.state.formTestExam;
        this.setState({formTestExam: {TestQuestion:'',TestAnswer1: '', TestAnswer2: '', TestAnswer3: '', TestAnswer4:''}})
        return await ADMIN_SERVICE.exam(data);
      }

      handleBeginnerExamSubmit = async e =>{
        e.preventDefault()
        const data = this.state.formBeginnerExam;
        this.setState({formBeginnerExam: {BeginnerQuestion:'',BeginnerAnswer1: '', BeginnerAnswer2: '', BeginnerAnswer3: '', BeginnerAnswer4:''}})
        return await ADMIN_SERVICE.postBeginnerExam(data);
      }

      handleAdvanceExamSubmit = async e =>{
        e.preventDefault()
        const data = this.state.formBeginnerExam;
        this.setState({formAdvanceExam: {AdvanceQuestion:'',AdvanceAnswer1: '', AdvanceAnswer2: '', AdvanceAnswer3: '', AdvanceAnswer4:''}})
        return await ADMIN_SERVICE.postBeginnerExam(data);
      }

      handleGetTestExamQuestions = async e =>{
        const {getQuestionsTestExam} = await ADMIN_SERVICE.getTestExamQuestion();
        this.setState({testQuestions:  getQuestionsTestExam})
      }
      
      handleGetBeginnerExamQuestions = async e =>{
        const {getQuestionsBegginerExam} = await ADMIN_SERVICE.getBeginnerExamQuestion();
        this.setState({beginnerQuestions:  getQuestionsBegginerExam})
      }

      handleGetAdvanceExamQuestions = async e => {
        const {getQuestionsAdvanceExam} = await ADMIN_SERVICE.getAdvanceExamQuestions();
        this.setState({advanceQuestions: getQuestionsAdvanceExam});
      }

      handleDeleteTestExamQuestion = async e => {
        await ADMIN_SERVICE.deleteTestExamQuestion(e);
      }

      handleDeleteBeginnerExamQuestion = async e =>{
        await ADMIN_SERVICE.deleteBeginnerExamQuestion(e)
      }

      handleDeleteAdvanceExamQuestion = async e => {
        await ADMIN_SERVICE.deleteAdvanceExamQuestion(e);
      }


    render() {
        const {
          state, 
          handleSignupInput,
          handleSignupSubmit, 
          handleLoginInput,
          handleLoginSubmit,
          handleTestExamInput,
          handleTestExamSubmit,
          handleGetTestExamQuestions,
          handleDeleteTestExamQuestion,
          handleBeginnerExamInput,
          handleBeginnerExamSubmit,
          handleGetBeginnerExamQuestions,
          handleDeleteBeginnerExamQuestion,
          handleAdvanceExamInput,
          handleAdvanceExamSubmit,
          handleGetAdvanceExamQuestions,
          handleDeleteAdvanceExamQuestion
        } = this;
        return (
            <MyContext.Provider 
            value={{
              state, 
              handleSignupInput,
              handleSignupSubmit,
              handleLoginInput,
              handleLoginSubmit,
              handleTestExamInput,
              handleTestExamSubmit,
              handleGetTestExamQuestions,
              handleDeleteTestExamQuestion,
              handleBeginnerExamInput,
              handleBeginnerExamSubmit,
              handleGetBeginnerExamQuestions,
              handleDeleteBeginnerExamQuestion,
              handleAdvanceExamInput,
              handleAdvanceExamSubmit,
              handleGetAdvanceExamQuestions,
              handleDeleteAdvanceExamQuestion
            }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default withRouter(MyProvider);