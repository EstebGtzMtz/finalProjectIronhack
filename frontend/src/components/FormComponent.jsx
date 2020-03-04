import React from 'react';
import {Box, Stack, Button,  Heading} from '@chakra-ui/core';
import {Link} from 'react-router-dom';
import {MyContext} from '../context';

const FormComponent = ({title, children, submit}) => {
    return (
        <MyContext.Consumer>
        {context => (
            <Box onSubmit={submit} as="form" w='90vw' boxShadow="xl" borderRadius="5%" backgroundColor="#FFF">
                <Stack spacing={8} p={8}>
                    <Heading textAlign="left" as="h1">{title}</Heading>
                    {children}
                    <Button type="submit" backgroundColor="#4ED2D0" borderRadius='25px'>{title}</Button> 
                </Stack>
            </Box>
        )}
        </MyContext.Consumer>
    )
}

export default FormComponent
