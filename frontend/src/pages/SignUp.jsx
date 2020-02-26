import React from 'react';
import {MyContext} from '../context';
import { Box, Flex, FormControl, InputGroup, InputLeftAddon, Input, Icon } from "@chakra-ui/core";
import FormComponent from '../components/FormComponent';

const signUp = () => {
    // <Box w="100vw" h="100vh" bgImage="url('../images/backgroundAuth.png')" bgPos="center" bgRepeat="no-repeat">
    //         </Box>
    return (
        <MyContext.Consumer>
      {context => (
        <Box w="100vw" h="100vh" bgImage="url('../images/backgroundAuth.png')" bgPos="center" bgRepeat="no-repeat">
            <Flex w="100vw" h="100vh" align="center" justify="center" flexDir="column">
                <FormComponent title="Signup">
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<Icon name="user" />} />
                            <Input/>
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<Icon name="email" />} />
                            <Input/>
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<Icon name="lock" />} />
                            <Input/>
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
