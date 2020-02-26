import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { NavbarComponent } from './components/NavbarComponent';
import Home from './pages/Home';
import Signup  from './pages/SignUp';
import Login from './pages/Login';

const Router = () => {
    return (
        <>
        <NavbarComponent />
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
         </Switch>   
        </>
    )
}

export default Router;
