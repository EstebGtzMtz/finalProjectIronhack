import React from 'react';
import {Flex, Heading, Stack} from '@chakra-ui/core';

const BoxNumberComponent = () => {
    return (           
        <Flex borderRadius='md' border='none' backgroundColor='#5DD432' width="16%" h='95%' justify='center' align='center' mr="5px" direction='column'>
            <Heading size="xs" color="white" border="none">7.5</Heading>
            <Heading size="xs" color="white" border="none">hours</Heading>
        </Flex>
    )
}

export default BoxNumberComponent
