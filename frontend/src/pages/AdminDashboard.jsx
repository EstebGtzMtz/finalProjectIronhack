import React from 'react';
import {MyContext} from '../context';
import {Box, Flex} from '@chakra-ui/core';
import {Link} from 'react-router-dom';
import NavbarTopComponent from '../components/NavbarTopComponent';
import { NavbarComponent } from '../components/NavbarComponent';
import Card from '../components/Card';

const AdminDashboard = () => {
    return (
        <MyContext.Consumer>
            {context =>(
                <Box w="100vw" h="100vh" bgImage="url('../images/backgroundNewsAndExam.png')" bgPos="center" bgRepeat="no-repeat">
                <NavbarTopComponent/>
                    <Flex w="100vw" h="100%" align="center" justify="center" flexDir="column" pt='100px'>
                        <Link exact to='/profile/adminDashboard/testExam'>
                            <Card customHeight='40vh'/>
                        </Link>
                        <Link exact to='/profile/adminDashboard/beginnerExam'>
                            <Card customHeight='40vh'/>
                        </Link>
                        <Link exact to='/profile/adminDashboard/advanceExam'>
                            <Card customHeight='40vh'/>
                        </Link>
                    </Flex>
                <NavbarComponent/>
                </Box>
            )}
        </MyContext.Consumer>
    )
}

export default AdminDashboard
