import React from 'react';
import {MyContext} from '../context';
import { Flex, Box, Text, Badge, Image, RadioGroup, Radio } from '@chakra-ui/core';

const CardQuestionComponent = ({testQuestion}) => {
    const [value, setValue] = React.useState("1");
    return (
        <MyContext.Consumer>
            {context =>(
              <Box mt='50px' w='90vw' boxShadow='md'>
              <Box>
                <Text textAlign='center' fontSize='2xl'>{testQuestion.content}</Text>
              <RadioGroup onChange={e => setValue(e.target.value)} value={value}>
                <Radio value="1">{testQuestion.optionA}</Radio>
                <Radio value="2">{testQuestion.optionB}</Radio>
                <Radio value="3">{testQuestion.optionC}</Radio>
                <Radio value="4">{testQuestion.optionD}</Radio>
              </RadioGroup>
            </Box>
            </Box>
            )}
        </MyContext.Consumer>
    )
}

export default CardQuestionComponent
