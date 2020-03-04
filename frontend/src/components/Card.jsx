import React from 'react';
import {Flex, Heading} from '@chakra-ui/core';
import {MyContext} from '../context';

const Card = ({customHeight, cardBackgroundColor, title}) => {
    return (
        <MyContext.Consumer>
            {context => (
                // bgImage="url('./images/rain.jpg')" bgPos="center" bgRepeat="no-repeat" bgSize='cover'
                <Flex borderRadius="25px" w="90vw" h={customHeight} backgroundColor={cardBackgroundColor} boxShadow='2xl'  mt='5vw' justify='center' align='center'>
                    <Heading size='md' color='#FFFF'>{title}</Heading>
                </Flex>
            )}
        </MyContext.Consumer>
        ) 
}
export default Card
