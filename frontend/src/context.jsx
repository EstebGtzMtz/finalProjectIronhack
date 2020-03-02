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
        isLoggedIn: false,
        loggedUser:{}
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

      handleSignupSubmit = async e => {
        e.preventDefault()
        const data = this.state.formSignup
        this.setState({formSignup: {name: '', email: '', password: ''}})
        return await AUTH_SERVICE.signup(data)
      }

      handleTestExamSubmit = async e =>{
        e.preventDefault()
        const data = this.state.formTestExam
        this.setState({formTestExam: {TestQuestion:'',TestAnswer1: '', TestAnswer2: '', TestAnswer3: '', TestAnswer4:''}})
        return await ADMIN_SERVICE.exam(data)
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


    render() {
        const {
          state, 
          handleSignupInput,
          handleSignupSubmit, 
          handleLoginInput,
          handleLoginSubmit,
          handleTestExamInput,
          handleTestExamSubmit
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
              handleTestExamSubmit
            }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default withRouter(MyProvider);