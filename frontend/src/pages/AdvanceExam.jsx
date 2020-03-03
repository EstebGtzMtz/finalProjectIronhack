import React, {useContext, useEffect} from 'react';
import {MyContext} from '../context';
import {Flex} from '@chakra-ui/core';
import BoxQuestionComponent from '../components/BoxQuestionComponent';
import SendAdvanceResultsComponent from '../components/SendAdvanceResultsComponent';


const AdvanceExam = () => {
    const context = useContext(MyContext);
    const {advanceQuestions, advanceScore} = context.state;

    useEffect(()=>{
        context.handleGetAdvanceExamQuestions().then().catch();
    }, [])

    return (
       <MyContext.Consumer>
           {context => (
            <Flex w="100vw" h="100%" bgImage="url('../images/backgroundNewsAndExam.png')" bgPos="center" bgRepeat="no-repeat">
                <Flex w="100vw" h="100%" align="center" justify="center" flexDir="column" marginTop='15vh'>
                    {advanceQuestions.map(({content, options, answer, _id})  => ( 
                        <BoxQuestionComponent content={content} options={options} key={_id}  selected={options => context.computeAnswer(options, answer) }/>
                    ))}

                    {context.state.advanceResponses === 10 ? <SendAdvanceResultsComponent result={advanceScore} /> : null}
                </Flex>
            </Flex> 
           )}
       </MyContext.Consumer>
    )
}

export default AdvanceExam
