import React, {useContext, useEffect} from 'react';
import {MyContext} from '../context';
import {Flex} from '@chakra-ui/core';
import BoxQuestionComponent from '../components/BoxQuestionComponent';
import SendBeginnerResultsComponent from '../components/SendBeginnerResultsComponent';


const BeginnerExam = () => {
    const context = useContext(MyContext);
    const {beginnerQuestions, beginnerScore} = context.state;

    useEffect(()=>{
        context.handleGetBeginnerExamQuestions().then().catch();
    }, [])

    return (
       <MyContext.Consumer>
           {context => (
            <Flex w="100vw" h="100%" bgImage="url('../images/backgroundNewsAndExam.png')" bgPos="center" bgRepeat="no-repeat">
                <Flex w="100vw" h="100%" align="center" justify="center" flexDir="column" marginTop='15vh'>
                    {beginnerQuestions.map(({content, options, answer, _id})  => ( 
                        <BoxQuestionComponent content={content} options={options} key={_id}  selected={options => context.computeBeginnerAnswer(options, answer) }/>
                    ))}

                    {context.state.beginnerScore === 10 ? <SendBeginnerResultsComponent result={beginnerScore} /> : null}
                </Flex>
            </Flex> 
           )}
       </MyContext.Consumer>
    )
}

export default BeginnerExam;
