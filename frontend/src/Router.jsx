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
import AdminBeginnerExam from './pages/AdminBeginnerExam';
import AdminAdvanceExam from './pages/AdminAdvanceExam';
import AdvanceExam from './pages/AdvanceExam';
import BeginnerExam from './pages/BeginnerExam';
import TestExam from './pages/TestExam';
import SelectFavouriteCategories from './pages/SelectFavouriteCategories';


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
            <Route exact path='/exams/advanceExam' component={AdvanceExam}/>
            <Route exact path='/profile/selectFavouriteCategories' component={SelectFavouriteCategories}/>
            <Route exact path='/exams/beginnerExam' component={BeginnerExam}/>
            <Route exact path='/exams/testExam' component={TestExam}/>
            <Route exact path='/profile/adminDashboard' component={AdminDashboard}/>
            <Route exact path='/profile/adminDashboard/testExam' component={AdminTestExam}/>
            <Route exact path='/profile/adminDashboard/beginnerExam' component={AdminBeginnerExam}/>
            <Route exact path='/profile/adminDashboard/advanceExam' component={AdminAdvanceExam}/>
         </Switch>   
        </>
    )
}

export default Router;
