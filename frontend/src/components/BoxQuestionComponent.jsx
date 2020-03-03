import React,{useState} from 'react';
import {Box, Heading, Button, Flex} from '@chakra-ui/core';

const BoxQuestionComponent = ({content, options, selected}) => {
    const [answer, setAnswer] = useState(options);

    return (
        <Flex mt='50px' w='90vw' h='20vh' boxShadow='md' backgroundColor='#FFFF' borderRadius='md' justifyContent='center' alignContent='center' direction='column'>
            <Box>
                <Heading as='h4' size='sm' textAlign='center'>
                    {content}
                </Heading>
            </Box>
            <br/>
            <Flex justifyContent='center' alignContent='center' wrap='wrap'>
                {answer.map((text, index)=>(
                    <Button key={index} variantColor="teal" variant="outline" onClick={() =>{setAnswer([text]); selected(text); }}>
                        {text}
                    </Button>
                ))}
            </Flex>
        </Flex>
        
    )
}

export default BoxQuestionComponent
