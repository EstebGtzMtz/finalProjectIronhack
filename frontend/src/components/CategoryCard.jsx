import React from 'react';
import {Image,Box} from '@chakra-ui/core';

const CategoryCard = ({funcion}) => {
    return (
        <Box onClick={funcion}>
            <Image rounded="md" src="https://bit.ly/2k1H1t6"/>
        </Box>
    )
}

export default CategoryCard
