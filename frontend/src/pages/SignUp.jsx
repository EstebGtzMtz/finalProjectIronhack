import React from 'react';
import {MyContext} from '../context';
import { Box, Flex, FormControl, InputGroup, InputLeftAddon, Input, Icon } from "@chakra-ui/core";
import FormComponent from '../components/FormComponent';

const signUp = () => {
    return (
        <MyContext.Consumer>
      {context => (
        <Box w="100vw" h="100vh" bgImage="url('../images/backgroundAuth.png')" bgPos="center" bgRepeat="no-repeat">
            <Flex w="100vw" h="100vh" align="center" justify="center" flexDir="column">
                <FormComponent submit={context.handleSignupSubmit} title="Signup">
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<Icon name="user" />} />
                            <Input 
                                placeholder='name'
                                name='name'
                                type='text'
                                value={context.state.formSignup.name}
                                onChange={context.handleSignupInput}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<Icon name="email" />} />
                            <Input
                                 onChange={context.handleSignupInput}
                                 placeholder="Email"
                                 name="email"
                                 type="email"
                                 value={context.state.formSignup.email}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<Icon name="lock" />} />
                            <Input 
                                onChange={context.handleSignupInput}
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={context.state.formSignup.password}
                            />
                        </InputGroup>
                    </FormControl>
                </FormComponent>
            </Flex>
        </Box>
      )}
    </MyContext.Consumer>
    )
}

export default signUp
