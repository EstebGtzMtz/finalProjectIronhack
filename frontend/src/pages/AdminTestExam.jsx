import React,{useContext} from 'react';
import { MyContext } from '../context';
import {Box,Input,Flex, FormControl, Textarea, useToast} from '@chakra-ui/core';
import FormComponent from '../components/FormComponent';
import  NavbarTopComponent from '../components/NavbarTopComponent';
import { NavbarComponent } from '../components/NavbarComponent';


const AdminTestExam = () => {
    const context = useContext(MyContext);
    const toast = useToast();

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
                <Box w="100vw" h="100%" bgImage="url('../images/backgroundNewsAndExam.png')" bgPos="center" bgRepeat="no-repeat">
                    <Flex w="100vw" h="100%" align="center" justify="center" flexDir="column" marginTop='15vh'>
                        <NavbarTopComponent/>
                        <FormComponent title='Create Test Exam Question' submit={submit}>
                            <FormControl isRequired>
                                <Textarea
                                    placeholder='Question'
                                    name='TestQuestion'
                                    type='text'
                                    value={context.state.formTestExam.TestQuestion}
                                    onChange={context.handleTestExamInput}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <Input 
                                    placeholder='Answer 1'
                                    name='TestAnswer1'
                                    type='text'
                                    value={context.state.formTestExam.TestAnswer1}
                                    onChange={context.handleTestExamInput}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <Input 
                                    placeholder='Answer 2'
                                    name='TestAnswer2'
                                    type='text'
                                    value={context.state.formTestExam.TestAnswer2}
                                    onChange={context.handleTestExamInput}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <Input 
                                    placeholder='Answer 3'
                                    name='TestAnswer3'
                                    type='text'
                                    value={context.state.formTestExam.TestAnswer3}
                                    onChange={context.handleTestExamInput}
                                />
                            </FormControl>
                            <FormControl >
                                <Input 
                                    placeholder='Answer 4'
                                    name='TestAnswer4'
                                    type='text'
                                    value={context.state.formTestExam.TestAnswer4}
                                    onChange={context.handleTestExamInput}
                                />
                            </FormControl>
                        </FormComponent>
                    </Flex>
                    <NavbarComponent/>
                </Box>
            )
            }
        </MyContext.Consumer>
    )
}

export default AdminTestExam
