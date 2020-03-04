import React, { Component, createContext } from 'react';
import {withRouter} from 'react-router-dom';
import AUTH_SERVICE from './services/auth';
import ADMIN_SERVICE from './services/adminDashboard';
import EXAM_SERVICE from './services/updateExams';


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
          TestAnswer4:'',
          TestCorrectAnswer:''
        },
        formBeginnerExam:{
          BeginnerQuestion:'',
          BeginnerAnswer1:'',
          BeginnerAnswer2:'',
          BeginnerAnswer3:'',
          BeginnerAnswer4:'',
          BeginnerCorrectAnswer:''
        },
        formAdvanceExam:{
          AdvanceQuestion:'',
          AdvanceAnswer1:'',
          AdvanceAnswer2:'',
          AdvanceAnswer3:'',
          AdvanceAnswer4:'',
          AdvanceCorrectAnswer:''
        },
        isLoggedIn: false,
        isAdmin: false,
        loggedUser:{},
        testQuestions:[],
        beginnerQuestions:[],
        advanceQuestions:[],
        advanceScore:1,
        advanceResponses:0,
        beginnerScore:1,
        beginnerResponses:0,
        testScore:1,
        testResponses:0,
        favouriteCategories:['otro'],
        newsDataFromAxios:[]
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
            if(data.user.role === 'ADMIN'){
              this.setState({isAdmin: true})
            }
            this.setState(prevState => ({
              ...prevState,
              formLogin: {
                email: '',
                password: ''
              },
              loggedUser: data.user,
              isLoggedIn: true
            }))
            console.log(this.state.isAdmin)
            this.props.history.push('/profile')
          })
          .catch(() => {
            console.log('something went wrong');
            this.props.history.push('/login');
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
        this.setState({formTestExam: {TestQuestion:'',TestAnswer1: '', TestAnswer2: '', TestAnswer3: '', TestAnswer4:'', TestCorrectAnswer:''}})
        return await ADMIN_SERVICE.exam(data);
      }

      handleBeginnerExamSubmit = async e =>{
        e.preventDefault()
        const data = this.state.formBeginnerExam;
        this.setState({formBeginnerExam: {BeginnerQuestion:'',BeginnerAnswer1: '', BeginnerAnswer2: '', BeginnerAnswer3: '', BeginnerAnswer4:'', BeginnerCorrectAnswer:''}})
        return await ADMIN_SERVICE.postBeginnerExam(data);
      }

      handleAdvanceExamSubmit = async e =>{
        e.preventDefault()
        const data = this.state.formAdvanceExam;
        this.setState({formAdvanceExam: {AdvanceQuestion:'',AdvanceAnswer1: '', AdvanceAnswer2: '', AdvanceAnswer3: '', AdvanceAnswer4:'', AdvanceCorrectAnswer:''}});
        return await ADMIN_SERVICE.postAdvanceExam(data);
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

      computeAnswer = (options, correctAnswer) => {
        if(options === correctAnswer){
            this.setState({advanceScore: this.state.advanceScore +1});
        }
        this.setState({
          advanceResponses: this.state.advanceResponses < 11 ? this.state.advanceResponses +1 : 10
        });
      }

      computeBeginnerAnswer = (options, correctAnswer) => {
        if(options === correctAnswer){
            this.setState({beginnerScore: this.state.beginnerScore +1});
        }
        this.setState({
          beginnerResponses: this.state.beginnerResponses < 11 ? this.state.beginnerResponses +1 : 10
        });
      }

      computeTestAnswer = (options, correctAnswer) => {
        if(options === correctAnswer){
            this.setState({testScore: this.state.testScore +1});
        }
        this.setState({
          testResponses: this.state.testResponses < 11 ? this.state.testResponses +1 : 10
        });
      }

      handleAdvanceScoreInUser = async (id) => {
        const data = this.state.advanceScore;
        await EXAM_SERVICE.updateAdvanceExam(id, data);
      }

      handleBeginnerScoreInUser = async (id) => {
        const data = this.state.beginnerScore;
        await EXAM_SERVICE.updateBeginnerExam(id, data);
      }

      handleTestScoreInUser = async (id) => {
        const data = this.state.testScore;
        await EXAM_SERVICE.updateTestExam(id, data);
      }
      
      handleCategoriesInUser = async(id)=>{
        const data = this.state.favouriteCategories;
        await EXAM_SERVICE.updateCategories(id, data)
      }
    
      handleAddDeportesCategory = (e) =>{
        this.setState({favouriteCategories: [...this.state.favouriteCategories, 'deportes']});
      }  
     
      handleAddCulturaSociedadCategory = (e) =>{
        this.setState({favouriteCategories: [...this.state.favouriteCategories, 'cultura-sociedad']});
      }

      handleAddMexicoCategory = (e) =>{
        this.setState({favouriteCategories: [...this.state.favouriteCategories, 'méxico']});
      }  

      handleAddPoliticaCategory = (e) =>{
        this.setState({favouriteCategories: [...this.state.favouriteCategories, 'política']});
      }  

      handleAddMundoCategory = (e) =>{
        this.setState({favouriteCategories: [...this.state.favouriteCategories, 'mundo']});
      }  
      
      handleAddEconomiaCategory = (e) =>{
        this.setState({favouriteCategories: [...this.state.favouriteCategories, 'economía']});
      
      }  

      handleAddChismeCategory = (e) =>{
        this.setState({favouriteCategories: [...this.state.favouriteCategories, 'chisme']});
      }

      handleAddNegocioCategory = (e) =>{
        this.setState({favouriteCategories: [...this.state.favouriteCategories, 'negocio']});
      }

      handleAddTecnologiaCategory = (e) =>{
        this.setState({favouriteCategories: [...this.state.favouriteCategories, 'tecnología']});
      
      }  

      handleAddOpinionCategory = (e) =>{
        this.setState({favouriteCategories: [...this.state.favouriteCategories, 'opinión']});
      }

      handleAddViajesCategory = (e) =>{
        this.setState({favouriteCategories: [...this.state.favouriteCategories, 'viajes']});
      }

      handleAddModaCategory = (e) =>{
        this.setState({favouriteCategories: [...this.state.favouriteCategories, 'moda']});
      }  

      hadleGetNewsAndSetState = (data)=>{
        this.setState({
          newsDataFromAxios: data
        })
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
          handleDeleteAdvanceExamQuestion,
          computeAnswer,
          computeBeginnerAnswer,
          computeTestAnswer,
          handleAdvanceScoreInUser,
          handleBeginnerScoreInUser,
          handleTestScoreInUser,
          handleAddDeportesCategory,
          handleAddCulturaSociedadCategory,
          handleAddMexicoCategory,
          handleCategoriesInUser,
          handleAddPoliticaCategory,
          handleAddMundoCategory,
          hadleGetNewsAndSetState,
          handleAddEconomiaCategory,
          handleAddChismeCategory,
          handleAddNegocioCategory,
          handleAddTecnologiaCategory,
          handleAddOpinionCategory,
          handleAddViajesCategory,
          handleAddModaCategory
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
              handleDeleteAdvanceExamQuestion,
              computeAnswer,
              computeBeginnerAnswer,
              computeTestAnswer,
              handleAdvanceScoreInUser,
              handleBeginnerScoreInUser,
              handleTestScoreInUser,
              handleAddDeportesCategory,
              handleAddCulturaSociedadCategory,
              handleAddMexicoCategory,
              handleCategoriesInUser,
              handleAddPoliticaCategory,
              handleAddMundoCategory,
              hadleGetNewsAndSetState,
              handleAddEconomiaCategory,
              handleAddChismeCategory,
              handleAddNegocioCategory,
              handleAddTecnologiaCategory,
              handleAddOpinionCategory,
              handleAddViajesCategory,
              handleAddModaCategory
            }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default withRouter(MyProvider);