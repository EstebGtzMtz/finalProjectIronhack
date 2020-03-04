import React, {useContext, useEffect} from 'react';
import {MyContext} from '../context';
import {Flex} from '@chakra-ui/core';
import BoxQuestionComponent from '../components/BoxQuestionComponent';
import SendAdvanceResultsComponent from '../components/SendAdvanceResultsComponent';
import NavbarTopComponent from '../components/NavbarTopComponent';
import { NavbarComponent } from '../components/NavbarComponent';


const AdvanceExam = () => {
    const context = useContext(MyContext);
    const {advanceQuestions, advanceScore} = context.state;

    useEffect(()=>{
        context.handleGetAdvanceExamQuestions().then().catch();
    }, [])

    return (
       <MyContext.Consumer>
           {context => (
            <Flex w="100vw" h="100%" bgImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583295325/finalProyectIronhack/backgroundNewsAndExam.png')" bgPos="center" bgRepeat="no-repeat">
                <NavbarTopComponent/>
                <Flex w="100vw" h="100%" align="center" justify="center" flexDir="column" pt='80px' pb='60px'>
                    {advanceQuestions.map(({content, options, answer, _id})  => ( 
                        <BoxQuestionComponent content={content} options={options} key={_id} selected={options => context.computeAnswer(options, answer) }/>
                    ))}

                    {context.state.advanceResponses === 10 ? <SendAdvanceResultsComponent result={advanceScore} /> : null}
                </Flex>
                <NavbarComponent/>
            </Flex> 
           )}
       </MyContext.Consumer>
    )
}

export default AdvanceExam
