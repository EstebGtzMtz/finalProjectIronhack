import React from 'react';
import {Image,Box} from '@chakra-ui/core';

const CategoryCard = ({funcion}) => {
    return (
        <Box onClick={funcion} w='40vw' h='40vw' m='5vw' border='1px'>
            {/* <Image rounded="md" src="https://bit.ly/2k1H1t6"/> */}
        </Box>
    )
}

export default CategoryCard
