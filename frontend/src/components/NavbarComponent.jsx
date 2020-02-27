import React from 'react';
import context, {MyContext} from '../context';
import {Icon, Stack, Box} from '@chakra-ui/core';
import {NavLink} from 'react-router-dom'; 

export const NavbarComponent = () => {
    return (
        <MyContext.Consumer>
        {context=>(
        <Stack isInline spacing={5} align="center" justify="space-evenly" shadow="2xl">  
            <NavLink exact to="/profile">
                <Icon name="user" size="50px" />
            </NavLink>
            <NavLink exact to='/news'>
                <Icon name="newspaper" size="50px" />
            </NavLink>
            <Icon name="exam" size="50px" />
            <Icon name="exit" size="50px" />
        </Stack>
        )}
        </MyContext.Consumer>
    )
}