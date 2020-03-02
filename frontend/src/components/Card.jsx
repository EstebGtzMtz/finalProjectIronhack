import React from 'react';
import {Flex} from '@chakra-ui/core';
import {MyContext} from '../context';

const Card = ({customHeight}) => {
    return (
        <MyContext.Consumer>
            {context => (
                <Flex borderRadius="md" w="90vw" h={customHeight} boxShadow='2xl' bgImage="url('./images/rain.jpg')" bgPos="center" bgRepeat="no-repeat" bgSize='cover' mt='5vw'>
                </Flex>
            )}
        </MyContext.Consumer>
        ) 
}
export default Card
