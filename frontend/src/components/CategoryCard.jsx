import React from 'react';
import {Image,Box} from '@chakra-ui/core';

const CategoryCard = ({funcion, cardCategoryImage}) => {
    return (
        <Box onClick={funcion} w='40vw' h='40vw' m='5vw' borderRadius='25px' backgroundImage={cardCategoryImage} bgPos="center" bgRepeat="no-repeat" bgSize='cover'>
            {/* <Image rounded="md" src="https://bit.ly/2k1H1t6"/> */}
        </Box>
    )
}

export default CategoryCard
