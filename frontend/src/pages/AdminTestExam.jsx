import React,{useContext, useEffect} from 'react';
import { MyContext } from '../context';
import {Box,Input,Flex, FormControl, Textarea, useToast} from '@chakra-ui/core';
import FormComponent from '../components/FormComponent';
import  NavbarTopComponent from '../components/NavbarTopComponent';
import { NavbarComponent } from '../components/NavbarComponent';
import CardQuestionComponent from '../components/CardQuestionComponent';


const AdminTestExam = () => {
    const context = useContext(MyContext);
    const toast = useToast();
    const {testQuestions} = context.state;
    
    useEffect(()=>{
        context.handleGetTestExamQuestions().then().catch();
    }, [])
    
    const submit = e => {
        context
          .handleTestExamSubmit(e)
          .then(res => {
              context.handleGetTestExamQuestions().then().catch();
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
                <Box w="100vw" h="100%" bgImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583295325/finalProyectIronhack/backgroundNewsAndExam.png')" bgPos="center">
                    <Flex w="100vw" h="100%" align="center" justify="center" flexDir="column" paddingTop='100px' paddingBottom='60px'>
                        <NavbarTopComponent/>
                        <FormComponent title='Create Test Exam Question' submit={submit}>
                            <FormControl isRequired>
                                <Textarea
                                    placeholder='Question'
                                    name='TestQuestion'
                                    type='text'
                                    value={context.state.formTestExam.TestQuestion}
                                    onChange={context.handleTestExamInput} 
                                    borderRadius='25px'
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <Input 
                                    placeholder='Answer 1'
                                    name='TestAnswer1'
                                    type='text'
                                    value={context.state.formTestExam.TestAnswer1}
                                    onChange={context.handleTestExamInput}
                                    borderRadius='25px'
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <Input 
                                    placeholder='Answer 2'
                                    name='TestAnswer2'
                                    type='text'
                                    value={context.state.formTestExam.TestAnswer2}
                                    onChange={context.handleTestExamInput}
                                    borderRadius='25px'
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <Input 
                                    placeholder='Answer 3'
                                    name='TestAnswer3'
                                    type='text'
                                    value={context.state.formTestExam.TestAnswer3}
                                    onChange={context.handleTestExamInput}
                                    borderRadius='25px'
                                />
                            </FormControl>
                            <FormControl >
                                <Input 
                                    placeholder='Answer 4'
                                    name='TestAnswer4'
                                    type='text'
                                    value={context.state.formTestExam.TestAnswer4}
                                    onChange={context.handleTestExamInput}
                                    borderRadius='25px'
                                />
                            </FormControl>
                            <FormControl >
                                <Input 
                                    placeholder='Correct Answer '
                                    name='TestCorrectAnswer'
                                    type='text'
                                    value={context.state.formTestExam.TestCorrectAnswer}
                                    onChange={context.handleTestExamInput}
                                    borderRadius='25px'
                                />
                            </FormControl>
                        </FormComponent>
                        {testQuestions.map((el, idx) => {
                            return (
                                <CardQuestionComponent testQuestion={el} key={idx}/>
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

export default AdminTestExam
