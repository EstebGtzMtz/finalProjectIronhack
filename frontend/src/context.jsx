import React, { Component, createContext } from 'react';
import {withRouter} from 'react-router-dom';
import AUTH_SERVICE from './services/auth';

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

      handleSignupSubmit = e => {
        e.preventDefault()
        const { name, email, password } = this.state.formSignup
        AUTH_SERVICE.signup({ name, email, password })
          .then(({ data }) => {
            this.setState(prevState => ({
              ...prevState,
              formSignup: {
                name: '',
                email: '',
                password: ''
              }
            }))
            this.props.history.push('/login')
          })
          .catch(() => {
            console.log('no entro')
          })
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
        const {state, handleSignupInput,handleSignupSubmit, handleLoginInput,handleLoginSubmit} = this;
        return (
            <MyContext.Provider 
            value={{state, handleSignupInput,handleSignupSubmit,handleLoginInput,handleLoginSubmit}}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default withRouter(MyProvider);