import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login';
import Profile from './pages/Profile';
import News from './pages/News';
import Exams from './pages/Exams';
import AdminDashboard from './pages/AdminDashboard';
import AdminTestExam from './pages/AdminTestExam';


const Router = () => {
    return (
        <>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/news' component={News} />
            <Route exact path='/exams' component={Exams} />
            <Route exact path='/logout'/>
            <Route exact path='/profile/adminDashboard' component={AdminDashboard}/>
            <Route exact path='/profile/adminDashboard/testExam' component={AdminTestExam}/>
         </Switch>   
        </>
    )
}

export default Router;
