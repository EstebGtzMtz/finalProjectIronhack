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
            if(isLoggedIn){
                return(
            <Box w="100vw" h="100%" bgImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583295325/finalProyectIronhack/backgroundNewsAndExam.png')" bgPos="center" mt='60px' mb='60px' pb='10px'>
                <NavbarTopComponent/>
                <Flex w="100vw" h="100%vh" flexDir="column" alignItems="center" pt="50px" >
                    {newsDataFromAxios.map((el,idx)=>{
                        return(
                            <CardNews category={el.category} date={el.date} publication={el.publication} title={el.title} articleText={el.articleText} key={idx} textLevel={el.level_binary}></CardNews>
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