import React,{useContext} from 'react';
import {MyContext} from '../context';
import {Button} from '@chakra-ui/core'

const SendAdvanceResultsComponent = ({result}) => {
    const context = useContext(MyContext);
    const {loggedUser} = context.state;
    return (
        <MyContext.Consumer>
            {context => (
                <div>
                    <h1>{result}</h1>
                    {console.log(loggedUser)}
                    <Button onClick={()=>context.handleAdvanceScoreInUser(loggedUser._id)}>Save Results</Button>
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default SendAdvanceResultsComponent
