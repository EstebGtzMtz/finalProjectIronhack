import React, {useContext, useEffect} from 'react';
import {MyContext} from '../context';
import {Flex} from '@chakra-ui/core';
import BoxQuestionComponent from '../components/BoxQuestionComponent';
import SendBeginnerResultsComponent from '../components/SendBeginnerResultsComponent';
import NavbarTopComponent from '../components/NavbarTopComponent';
import { NavbarComponent } from '../components/NavbarComponent';


const BeginnerExam = () => {
    const context = useContext(MyContext);
    const {beginnerQuestions, beginnerScore} = context.state;

    useEffect(()=>{
        context.handleGetBeginnerExamQuestions().then().catch();
    }, [])

    return (
       <MyContext.Consumer>
           {context => (
            <Flex w="100vw" h="100%" bgImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583295325/finalProyectIronhack/backgroundNewsAndExam.png')" bgPos="center">
            <NavbarTopComponent/>
                <Flex w="100vw" h="100%" align="center" justify="center" flexDir="column" marginTop='15vh' pb='60px'>
                    {beginnerQuestions.map(({content, options, answer, _id})  => ( 
                        <BoxQuestionComponent content={content} options={options} key={_id}  selected={options => context.computeBeginnerAnswer(options, answer) }/>
                    ))}

                    {context.state.beginnerScore === 5 ? <SendBeginnerResultsComponent result={beginnerScore} /> : null}
                </Flex>
                <NavbarComponent/>
            </Flex> 
           )}
       </MyContext.Consumer>
    )
}

export default BeginnerExam;
