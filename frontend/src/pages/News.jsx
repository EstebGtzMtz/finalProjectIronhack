import React from 'react';
import {Box, Flex} from '@chakra-ui/core';
import Card from '../components/Card';
import NavbarTopComponent from '../components/NavbarTopComponent'
import { MyContext } from '../context';
import { NavbarComponent } from '../components/NavbarComponent';

const News = ({history})=>{
        return (
            <MyContext.Consumer>
            {context => {
                const {isLoggedIn} = context.state;
                if(isLoggedIn===true){
                    return(
                <Box w="100vw" h='100%' bgImage="url('../images/backgroundNewsAndExam.png')" bgPos="center" bgRepeat="no-repeat" bgSize='cover'>
                    <NavbarTopComponent/>
                    <Flex w="100vw" h="100%vh" flexDir="column" alignItems="center" pt="50px" >
                        <Card customHeight='25vh'></Card>
                        <Card customHeight='25vh'></Card>
                        <Card customHeight='25vh'></Card>
                        <Card customHeight='25vh'></Card>
                        <Card customHeight='25vh'></Card>
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

export default News;

News.contextType = MyContext;