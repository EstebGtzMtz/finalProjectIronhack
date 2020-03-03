import React from 'react';
import {Box, Flex} from '@chakra-ui/core';
import NavbarTopComponent from '../components/NavbarTopComponent';
import Card from '../components/Card'; 
import {NavbarComponent} from '../components/NavbarComponent';
import {MyContext} from '../context';
import {Link} from 'react-router-dom';


const Exams =({history})=> {
    return (
        <MyContext.Consumer>
        {context => {
            const {isLoggedIn} = context.state;
            if(isLoggedIn===true){
                return(
            <Box w="100vw" h='100%' bgImage="url('../images/backgroundNewsAndExam.png')" bgPos="center" bgRepeat="no-repeat">
            <NavbarTopComponent/>
            <Flex w="100vw" h="100%" flexDir="column" alignItems="center" pt="50px">
                <Box border='1px' h='50%'>
                <Link exact to='/exams/advanceExam'>
                    <Card customHeight='50vh'/>
                </Link>
                <Link exact to='/exams/beginnerExam'>
                 <Card customHeight='50vh'></Card>
                </Link>
                <Link exact to='/exams/testExam'>
                 <Card customHeight='50vh'></Card>
                </Link>
                </Box>
            </Flex>
            <NavbarComponent/>
            </Box>
                )
            }else{
                history.push('/login');
            }
        }}
        </MyContext.Consumer>
    )
}

export default Exams;

Exams.contextType = MyContext;