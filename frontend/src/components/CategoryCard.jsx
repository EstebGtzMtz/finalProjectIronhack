import React from 'react';
import {Box} from '@chakra-ui/core';

const CategoryCard = ({funcion, cardCategoryImage}) => {
    return (
        <Box onClick={funcion} w='40vw' h='40vw' m='5vw' borderRadius='25px' backgroundImage={cardCategoryImage} bgPos="center" bgRepeat="no-repeat" bgSize='cover'>
        </Box>
    )
}

export default CategoryCard
