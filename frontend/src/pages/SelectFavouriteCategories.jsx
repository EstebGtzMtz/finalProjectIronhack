import React,{useContext} from 'react';
import {MyContext} from '../context';
import CategoryCard from '../components/CategoryCard';
import {Button, Box} from '@chakra-ui/core';

const SelectFavouriteCategories = () => {
    const context = useContext(MyContext);
    const { loggedUser,favouriteCategories} = context.state;
    
    return (
        <MyContext.Consumer>
            {context => (
                <Box>
                    {console.log(loggedUser, favouriteCategories)}
                    <CategoryCard funcion={context.handleAddDeportesCategory}/>
                    <CategoryCard funcion={context.handleAddCulturaSociedadCategory}/>
                    <CategoryCard funcion={context.handleAddMexicoCategory}/>
                    <Button onClick={()=>context.handleCategoriesInUser(context.state.loggedUser._id)}>que onda</Button>
                </Box>
            )}
        </MyContext.Consumer>
    )
}

export default SelectFavouriteCategories;