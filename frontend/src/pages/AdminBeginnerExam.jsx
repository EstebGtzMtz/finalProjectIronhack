import React,{useContext, useEffect} from 'react';
import { MyContext } from '../context';
import {Box,Input,Flex, FormControl, Textarea, useToast} from '@chakra-ui/core';
import FormComponent from '../components/FormComponent';
import  NavbarTopComponent from '../components/NavbarTopComponent';
import { NavbarComponent } from '../components/NavbarComponent';
import CardQuestionBeginnerComponent from '../components/CardQuestionBeginnerComponent';

const AdminBeginnerExam = ({history}) => {
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
        {context=>{
             const {isLoggedIn, isAdmin} = context.state;
             if(isLoggedIn && isAdmin){
             return(
            <Box w="100vw" h="100%" bgImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583295325/finalProyectIronhack/backgroundNewsAndExam.png')" bgPos="center">
            <Flex w="100vw" h="100%" align="center" justify="center" flexDir="column" paddingTop='100px' paddingBottom='60px'>
                    <NavbarTopComponent/>
                    <FormComponent title='Create Beginner Exam Question' submit={submit}>
                        <FormControl isRequired>
                            <Textarea
                                placeholder='Question'
                                name='BeginnerQuestion'
                                type='text'
                                value={context.state.formBeginnerExam.BeginnerQuestion}
                                onChange={context.handleBeginnerExamInput}
                                borderRadius='25px'
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input 
                                placeholder='Answer 1'
                                name='BeginnerAnswer1'
                                type='text'
                                value={context.state.formBeginnerExam.BeginnerAnswer1}
                                onChange={context.handleBeginnerExamInput}
                                borderRadius='25px'
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input 
                                placeholder='Answer 2'
                                name='BeginnerAnswer2'
                                type='text'
                                value={context.state.formBeginnerExam.BeginnerAnswer2}
                                onChange={context.handleBeginnerExamInput}
                                borderRadius='25px'
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
                                borderRadius='25px'
                            />
                        </FormControl>
                        <FormControl >
                            <Input 
                                placeholder='Correct Answer'
                                name='BeginnerCorrectAnswer'
                                type='text'
                                value={context.state.formBeginnerExam.BeginnerCorrectAnswer}
                                onChange={context.handleBeginnerExamInput}
                                borderRadius='25px'
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
            }else{
                history.push('/profile');
            }}
        }
    </MyContext.Consumer>
    )
}

export default AdminBeginnerExam
