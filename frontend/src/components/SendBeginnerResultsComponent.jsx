import React,{useContext} from 'react';
import {MyContext} from '../context';
import {Button} from '@chakra-ui/core'

const SendBeginnerResultsComponent = ({result}) => {
    const context = useContext(MyContext);
    const {loggedUser} = context.state;
    return (
        <MyContext.Consumer>
            {context => (
                <div>
                    <h1>{result}</h1>
                    <Button onClick={()=>context.handleBeginnerScoreInUser(loggedUser._id)}>Save Results</Button>
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default SendBeginnerResultsComponent;
