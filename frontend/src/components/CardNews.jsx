import React from 'react';
import {MyContext} from '../context';
import {Box, Flex, Text} from '@chakra-ui/core';

const CardNews = ({category, date, publication, title, articleText, textLevel}) => {
    return (
        <MyContext.Consumer>
            {context => (
                <Box backgroundColor='#F076B7' mt='30px' w='90vw' shadow='2xl' borderRadius='25px' mt='10px'>
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" color='#FFFF'>
                    {title}
                </Text>
                <Text mt={2} fontSize="md" fontWeight="semibold" lineHeight="short" color='#FFFF'>
                    {articleText}
                </Text>
                <Text mt={2} color='#FFFF'>{publication}</Text>
                <Flex mt={2} align="center">
                    <Text ml={1} fontsize="sm" color='#FFFF'>Category: {category}</Text><br/>
                </Flex>
                    <Text ml={1} fontsize="sm" color='#FFFF'>Text Level: {textLevel}</Text>
                <Flex align="baseline" mt={2}>
                    <Text ml={2} textTransform="uppercase" fontSize="sm" fontWeight="bold" color="#FFFF">
                        {date}
                    </Text>
                </Flex>
                </Box>
            )}
        </MyContext.Consumer>
    )
}

export default CardNews
