import React,{useContext} from 'react';
import { Box, Text, Icon, Button, useToast} from '@chakra-ui/core';
import {MyContext} from '../context';

const CardQuestionAdvanceComponent = ({advanceQuestions}) => {
  const context = useContext(MyContext);
  const toast = useToast();

  const deleteQuestion = e => {
    context
      .handleDeleteAdvanceExamQuestion(advanceQuestions._id)
      .then(res => { 
        context.handleGetAdvanceExamQuestions().then().catch();
        toast({
            title: "Question deleted succesfully",
            description: "Everything it's ok",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
      })
      .catch(err => {
        toast({
            title: "Error",
            description: "Something wrong deleting the question",
            status: "warning",
            isClosable: true,
            duration: 9000,
        });
      });
  };

    return (
        <MyContext.Consumer>
            {context =>(
              <Box mt='50px' w='90vw' boxShadow='md' borderRadius='25px' backgroundColor='#FFFF'>
              <Box>
                <Text textalign='center' fontSize='2xl'>{advanceQuestions.content}</Text>
                <Button onClick={()=>deleteQuestion()}>
                  <Icon name="warning" size="32px" color="red.500" />
                  </Button>
            </Box>
            </Box>
            )}
        </MyContext.Consumer>
    )
}

export default CardQuestionAdvanceComponent;