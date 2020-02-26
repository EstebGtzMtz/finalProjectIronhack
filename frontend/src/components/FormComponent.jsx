import React from 'react';
import {Box, Stack, Button,  Heading} from '@chakra-ui/core';
import {Link} from 'react-router-dom';

const FormComponent = ({title, children}) => {
    return (
        <Box /*onSubmit={submit}*/ as="form"  w='90vw' boxShadow="xl" borderRadius="5%" backgroundColor="#FFF">
            <Stack spacing={8} p={8}>
                <Heading textAlign="left" as="h1">{title}</Heading>
                {children}
                <Button type="submit" backgroundColor="#4ED2D0">{title}</Button> 
                <hr style={{
                    backgroundColor:"#4CCFD0",
                    height: "1px"
                    }}/>
                    <br/>
                <p> Have an acount ?</p>
                {
                    title === 'Login' ? <Link exact to="/signup">Signup</Link> : <Link textAlign="center" exact to="/login">Login</Link>
                }
            </Stack>
        </Box>
    )
}

export default FormComponent
