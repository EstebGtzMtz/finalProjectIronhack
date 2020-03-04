import React from 'react';
import {MyContext} from '../context';
import {Flex, Heading, Avatar, AvatarBadge} from '@chakra-ui/core';

const NavbarTopComponent = () => {
    return (
       <MyContext.Consumer>
            {context =>(
                <Flex w='100vw' h="10%" align='center' direction='column' position='fixed' top='0' backgroundColor='#FFFF' shadow='2xl' borderRadius='25px'>                   
                    <Heading as='h3' size='md' textAlign='left'>{context.state.loggedUser.name}</Heading>
                    <Avatar size="xl" name={context.state.loggedUser.name} src={context.state.loggedUser.image}>
                        <AvatarBadge size='1em' bg="green.500" />
                    </Avatar>
                </Flex>
            )}
            </MyContext.Consumer>
        
    )
}

export default NavbarTopComponent;
