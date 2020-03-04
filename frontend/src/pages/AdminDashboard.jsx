import React from 'react';
import {MyContext} from '../context';
import {Box, Flex} from '@chakra-ui/core';
import {Link} from 'react-router-dom';
import NavbarTopComponent from '../components/NavbarTopComponent';
import { NavbarComponent } from '../components/NavbarComponent';
import Card from '../components/Card';

const AdminDashboard = ({history}) => {
    return (
        <MyContext.Consumer>
            {context =>{
                const {isLoggedIn, isAdmin} = context.state;
                if(isLoggedIn && isAdmin){
                return(
                <Box w="100vw" h="100vh" bgImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583295325/finalProyectIronhack/backgroundNewsAndExam.png')" bgPos="center" bgRepeat="no-repeat">
                <NavbarTopComponent/>
                    <Flex w="100vw" h="100%" align="center" justify="center" flexDir="column" pt='10px'> 
                        <Link exact to='/profile/adminDashboard/testExam'>
                            <Card customHeight='25vh' cardBackgroundColor='#42ADED' title='Create Test Question'/>
                        </Link>
                        <Link exact to='/profile/adminDashboard/beginnerExam'>
                            <Card customHeight='25vh' cardBackgroundColor='#6942ED' title='Create Beginner Question'/>
                        </Link>
                        <Link exact to='/profile/adminDashboard/advanceExam'>
                            <Card customHeight='25vh' cardBackgroundColor='#EA42ED' title='Create Advance Question'/>
                        </Link>
                    </Flex>
                <NavbarComponent/>
                </Box>
                )
                }}
            }
        </MyContext.Consumer>
    )
}

export default AdminDashboard
