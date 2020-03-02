import React from 'react';
import {MyContext} from '../context';
import {Flex, Heading, Image} from '@chakra-ui/core';

const NavbarTopComponent = () => {
    return (
       <MyContext.Consumer>
            {context =>(
                // position='fixed' top='0'
                <Flex w='100vw' h="10%" align='center' direction='column' position='fixed' top='0' backgroundColor='#FFFF' shadow='2xl'>                   
                    <Heading as='h3' size='md' textAlign='left'>{context.state.loggedUser.name}</Heading>
                    <Image rounded="full" size="100px" src={context.state.loggedUser.image} alt={context.state.loggedUser.name}/>
                </Flex>
            )}
            </MyContext.Consumer>
        
    )
}

export default NavbarTopComponent;
