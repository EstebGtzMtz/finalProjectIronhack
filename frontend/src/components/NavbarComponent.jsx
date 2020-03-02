import React from 'react';
import {Icon, Stack} from '@chakra-ui/core';
import {NavLink} from 'react-router-dom'; 

export const NavbarComponent = () => {
    return (
        
        <Stack isInline spacing={5} align="center" justify="space-evenly" shadow="2xl" position="fixed" bottom="0" w='100vw' backgroundColor='#FFFF'>  
            <NavLink exact to="/profile">
                <Icon name="user" size="50px" />
            </NavLink>
            <NavLink exact to='/news'>
                <Icon name="newspaper" size="50px" />
            </NavLink>
            <NavLink exact to='/exams'>
                <Icon name="exam" size="50px" />
            </NavLink>
            <Icon name="exit" size="50px" />
        </Stack>
    )
}