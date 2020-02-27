import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { NavbarComponent } from './components/NavbarComponent';
import Home from './pages/Home';
import Signup  from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import News from './pages/News';

const Router = () => {
    return (
        <>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/news' component={News} />
         </Switch>   
        <NavbarComponent />
        </>
    )
}

export default Router;
