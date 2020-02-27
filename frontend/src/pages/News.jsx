import React from 'react';
import {Box, Flex} from '@chakra-ui/core';
import Card from '../components/Card';

const News = () => {
    return (
        <Box w="100vw" h="100vh" bgImage="url('../images/backgroundNewsAndExam.png')" bgPos="center" bgRepeat="no-repeat">
            <Flex w="100vw" h="100vh" flexDir="column" alignItems="center" pt="50px" >
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </Flex>
        </Box>
    )
}

export default News;
