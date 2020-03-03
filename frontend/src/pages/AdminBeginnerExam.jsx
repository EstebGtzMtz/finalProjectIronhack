import React,{useContext, useEffect} from 'react';
import { MyContext } from '../context';
import {Box,Input,Flex, FormControl, Textarea, useToast} from '@chakra-ui/core';
import FormComponent from '../components/FormComponent';
import  NavbarTopComponent from '../components/NavbarTopComponent';
import { NavbarComponent } from '../components/NavbarComponent';
import CardQuestionBeginnerComponent from '../components/CardQuestionBeginnerComponent';

const AdminBeginnerExam = () => {
    const context = useContext(MyContext);
    const toast = useToast();
    const {beginnerQuestions} = context.state;

    useEffect(()=>{
        context.handleGetBeginnerExamQuestions().then().catch();
    }, [])
    
    const submit = e => {
        context
          .handleBeginnerExamSubmit(e)
          .then(res => {
              context.handleGetBeginnerExamQuestions().then().catch();
            toast({
                title: "Question created",
                description: "Everything it's ok",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
          })
          .catch(err => {
            toast({
                title: "Error",
                description: "Something wrong creating the question",
                status: "warning",
                duration: 9000,
                isClosable: true,
            });
          });
      };

    return (
        <MyContext.Consumer>
        {context=>(
            <Box w="100vw" h="100%" bgImage="url('../images/backgroundNewsAndExam.png')" bgPos="center" bgRepeat="no-repeat">
                <Flex w="100vw" h="100%" align="center" justify="center" flexDir="column" marginTop='15vh'>
                    <NavbarTopComponent/>
                    <FormComponent title='Create Beginner Exam Question' submit={submit}>
                        <FormControl isRequired>
                            <Textarea
                                placeholder='Question'
                                name='BeginnerQuestion'
                                type='text'
                                value={context.state.formBeginnerExam.BeginnerQuestion}
                                onChange={context.handleBeginnerExamInput}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input 
                                placeholder='Answer 1'
                                name='BeginnerAnswer1'
                                type='text'
                                value={context.state.formBeginnerExam.BeginnerAnswer1}
                                onChange={context.handleBeginnerExamInput}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input 
                                placeholder='Answer 2'
                                name='BeginnerAnswer2'
                                type='text'
                                value={context.state.formBeginnerExam.BeginnerAnswer2}
                                onChange={context.handleBeginnerExamInput}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input 
                                placeholder='Answer 3'
                                name='BeginnerAnswer3'
                                type='text'
                                value={context.state.formBeginnerExam.BeginnerAnswer3}
                                onChange={context.handleBeginnerExamInput}
                            />
                        </FormControl>
                        <FormControl >
                            <Input 
                                placeholder='Answer 4'
                                name='BeginnerAnswer4'
                                type='text'
                                value={context.state.formBeginnerExam.BeginnerAnswer4}
                                onChange={context.handleBeginnerExamInput}
                            />
                        </FormControl>
                        <FormControl >
                            <Input 
                                placeholder='Correct Answer'
                                name='BeginnerCorrectAnswer'
                                type='text'
                                value={context.state.formBeginnerExam.BeginnerCorrectAnswer}
                                onChange={context.handleBeginnerExamInput}
                            />
                        </FormControl>
                    </FormComponent>
                    {beginnerQuestions.map((el, idx) => {
                            return (
                                <CardQuestionBeginnerComponent beginnerQuestion={el} key={idx}/>
                            )
                        })} 
                </Flex>
                <NavbarComponent/>
            </Box>
        )
        }
    </MyContext.Consumer>
    )
}

export default AdminBeginnerExam
