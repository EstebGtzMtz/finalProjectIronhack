import React from 'react';
//import {MyContext} from '../context';
import {Box, Image,  Flex, Heading, Stack} from '@chakra-ui/core';
import BoxNumberComponent from '../components/BoxNumberComponent';

const Profile = () => {
    return (
        <Box w="100vw" h="100vh" bgImage="url('../images/backgroundProfile.png')" bgPos="center" bgRepeat="no-repeat">
            <Flex w="100vw" h="100vh" flexDir="column" alignItems="center" pt="50px" >
                <Flex w="100vw" align="center" direction="column"> 
                    <Heading alignSelf="start" as="h1" size="lg" pb="2vh" pl="5vw">Good morning Max !!!</Heading>
                    <Image rounded="full" size="180px" src="../images/vayne.jpg" alt="vayne"/>
                </Flex>
                <Flex borderRadius="md" w="95vw" h="15vh" boxShadow='2xl' align="center" justify='center' mt="2vh" direction="column"> 
                        <Heading size="sm" color='#5DD432'>You're on a 5 day Streak</Heading>
                        <Flex w='80vw' h='40%' justify='center' align='center' direction="row" mt='10px'>
                            <BoxNumberComponent/>
                            <BoxNumberComponent/>
                            <BoxNumberComponent/>
                            <BoxNumberComponent/>
                            <Flex borderRadius='md' border='1px'borderColor='#5DD432' backgroundColor='white' width="16%" h='95%' justify='center' align='center' mr="5px"  direction='column'>
                                <Heading size="xs" color="#5DD432" border="none">7.5</Heading>
                                <Heading size="xs" color="#5DD432" border="none">hours</Heading>
                            </Flex>
                        </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Profile
