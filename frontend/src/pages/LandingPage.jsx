import React from 'react';
import {Box, Flex, Button} from '@chakra-ui/core';
import {Link} from 'react-router-dom';

const LandingPage = () => {
    return (
        <Box w="100vw" h="100vh" bgImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583420748/finalProyectIronhack/Logged_out.png')" bgPos="center" bgRepeat="no-repeat" bgPos='cover'>
        <Flex align='center' justify='flex-end' w='100' h='50px' spacing={5}>
           <Link exact to='/login'>
                <Button variantColor="blue" variant="outline" mr='10px'>Login</Button>
           </Link>
           <Link exact to='/signup'>
                <Button variantColor="blue" mr='10px'>Signup</Button>
           </Link>
        </Flex>
        </Box>
    )
}

export default LandingPage
