import React,{useContext} from 'react';
import { Box, Flex, FormControl, InputGroup, InputLeftAddon, Input, Icon , useToast} from "@chakra-ui/core";
import {MyContext} from '../context';
import FormComponent from '../components/FormComponent';

function SignUp ({history}) {
  const context = useContext(MyContext);
    const toast = useToast();
    
    const submit = e => {
        context
          .handleSignupSubmit(e)
          .then(res => {
            toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            history.push('/login')
          })
          .catch(err => {
            console.log(err);
            toast({
                title: "Error :(",
                description: "Cannot get your account",
                status: "warning",
                duration: 9000,
                isClosable: true,
            });
          });
      };
    
    return (        
    <MyContext.Consumer>
      {context => (
        <Box w="100vw" h="100vh" bgImage="url('../images/backgroundAuth.png')" bgPos="center" bgRepeat="no-repeat">
            <Flex w="100vw" h="100vh" align="center" justify="center" flexDir="column">
                <FormComponent submit={submit} title="Signup">
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

export default SignUp
