import React from 'react';
import {MyContext} from '../context';
import {Box, Flex, Text} from '@chakra-ui/core';

const CardNews = ({category, date, publication, title}) => {
    return (
        <MyContext.Consumer>
            {context => (
                <Box backgroundColor='#FFFF' mt='30px' w='90vw' shadow='2xl'>
                <Flex align="baseline" mt={2}>
                    <Text ml={2} textTransform="uppercase" fontSize="sm" fontWeight="bold" color="pink.800">
                        {date}
                    </Text>
                </Flex>
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                    {title}
                </Text>
                <Text mt={2}>{publication}</Text>
                <Flex mt={2} align="center">
                    <Text ml={1} fontsize="sm">Categoria: {category}</Text>
                </Flex>
                </Box>
            )}
        </MyContext.Consumer>
    )
}

export default CardNews
