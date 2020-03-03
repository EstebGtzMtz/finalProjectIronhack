import React, {useContext, useEffect} from 'react';
import {MyContext} from '../context';
import {Flex} from '@chakra-ui/core';
import BoxQuestionComponent from '../components/BoxQuestionComponent';
import SendTestResultsComponent from '../components/SendTestResultsComponent';


const TestExam = () => {
    const context = useContext(MyContext);
    const {testQuestions, testScore} = context.state;

    useEffect(()=>{
        context.handleGetTestExamQuestions().then().catch();
    }, [])

    return (
       <MyContext.Consumer>
           {context => (
            <Flex w="100vw" h="100%" bgImage="url('../images/backgroundNewsAndExam.png')" bgPos="center" bgRepeat="no-repeat">
                <Flex w="100vw" h="100%" align="center" justify="center" flexDir="column" marginTop='15vh'>
                    {testQuestions.map(({content, options, answer, _id})  => ( 
                        <BoxQuestionComponent content={content} options={options} key={_id}  selected={options => context.computeTestAnswer(options, answer) }/>
                    ))}

                    {context.state.testResponses === 10 ? <SendTestResultsComponent result={testScore} /> : null}
                </Flex>
            </Flex> 
           )}
       </MyContext.Consumer>
    )
}

export default TestExam
