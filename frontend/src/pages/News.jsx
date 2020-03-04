import React,{useEffect, useContext} from 'react';
import { MyContext } from '../context';
import {Box, Flex} from '@chakra-ui/core';
import NavbarTopComponent from '../components/NavbarTopComponent'
import { NavbarComponent } from '../components/NavbarComponent';
import axios from 'axios';
import CardNews from '../components/CardNews';


const News = ({history})=>{
    const context = useContext(MyContext);
    const {loggedUser, newsDataFromAxios} = context.state

    useEffect( ()=>{
        async function fetchData (){
            const {data} = await axios.get(`https://lectur.herokuapp.com/getrec/${loggedUser._id}`)
            context.hadleGetNewsAndSetState(data);
        }
        fetchData();
    },[])

    return (
        <MyContext.Consumer>
        {context => {
            const {isLoggedIn} = context.state;
            if(isLoggedIn===true){
                return(
            <Box w="100vw" h='100%' bgImage="url('../images/backgroundNewsAndExam.png')" bgPos="center" bgRepeat="no-repeat" bgSize='cover'>
                <NavbarTopComponent/>
                <Flex w="100vw" h="100%vh" flexDir="column" alignItems="center" pt="50px" >
                    {newsDataFromAxios.map((el,idx)=>{
                        return(
                            <CardNews category={el.category} date={el.date} publication={el.publication} title={el.title}></CardNews>
                        )
                    })}
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