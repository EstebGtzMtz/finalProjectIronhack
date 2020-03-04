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
            <Box w="100vw" h='100%' bgImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583295325/finalProyectIronhack/backgroundNewsAndExam.png')" bgPos="center" bgRepeat="no-repeat" pt='80px' pb='13px'>
            <NavbarTopComponent/>
            <Flex w="100vw" h="100%" flexDir="column" alignItems="center">
                <Box h='50%'>
                <Link exact to='/exams/advanceExam'>
                    <Card customHeight='25vh' cardBackgroundColor='#76ED42' title='Advance Exam' />
                </Link>
                <Link exact to='/exams/beginnerExam'>
                 <Card customHeight='25vh' cardBackgroundColor='#5C42ED' title='Beginner Exam'/>
                </Link>
                <Link exact to='/exams/testExam'>
                 <Card customHeight='25vh' cardBackgroundColor='#ED42B9' title='Test Exam'/>
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