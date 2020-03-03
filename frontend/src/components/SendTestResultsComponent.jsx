import React,{useContext} from 'react';
import {MyContext} from '../context';
import {Button} from '@chakra-ui/core'

const SendTestResultsComponent = ({result}) => {
    const context = useContext(MyContext);
    const {loggedUser} = context.state;
    return (
        <MyContext.Consumer>
            {context => (
                <div>
                    <h1>{result}</h1>
                    <Button onClick={()=>context.handleTestScoreInUser(loggedUser._id)}>Save Results</Button>
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default SendTestResultsComponent;
