import React from 'react';
import {MyContext} from '../context';
import { Box, Flex, FormControl, InputGroup, InputLeftAddon, Input, Icon,Text } from "@chakra-ui/core";
import FormComponent from '../components/FormComponent';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
    <MyContext.Consumer>
      {context => (
        <Box w="100vw" h="100vh" bgImage="url('../images/backgroundAuth.png')" bgPos="center" bgRepeat="no-repeat">
            <Flex w="100vw" h="100vh" align="center" justify="center" flexDir="column">
                <FormComponent submit={context.handleLoginSubmit} title="Login">
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<Icon name="email" />} />
                            <Input 
                                onChange={context.handleLoginInput}
                                 placeholder="Email"
                                 name="email"
                                 type="email"
                                 value={context.state.formLogin.email}
                                 />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<Icon name="lock" />} />
                            <Input
                                onChange={context.handleLoginInput}
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={context.state.formLogin.password}
                            />
                        </InputGroup>
                    </FormControl>
                </FormComponent>
                <Link exact to='/signup'>
                <Text variantColor="blue" variant="outline" alignSelf='flex-end'>Signup</Text>
           </Link>
            </Flex>
        </Box>
      )}
    </MyContext.Consumer>
    )
}

export default Login