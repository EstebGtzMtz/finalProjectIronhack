import React,{useContext} from 'react';
import {MyContext} from '../context';
import CategoryCard from '../components/CategoryCard';
import {Button, Box, Flex} from '@chakra-ui/core';
import  NavbarTopComponent from '../components/NavbarTopComponent';
import { NavbarComponent } from '../components/NavbarComponent';

const SelectFavouriteCategories = () => {
    const context = useContext(MyContext);
    
    return (
        <MyContext.Consumer>
            {context => (
                <Box w="100vw" h="100%" bgImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583295325/finalProyectIronhack/backgroundNewsAndExam.png')" bgPos="center" mt='70px' mb='60px' pb='10px'>
                    <NavbarTopComponent/>
                        <Flex direction='row' wrap='wrap' justify='center' alignContent='center'>
                            <CategoryCard funcion={context.handleAddDeportesCategory}/>
                            <CategoryCard funcion={context.handleAddCulturaSociedadCategory}/>
                            <CategoryCard funcion={context.handleAddMexicoCategory}/>
                            <CategoryCard funcion={context.handleAddPoliticaCategory}/>
                            <CategoryCard funcion={context.handleAddMundoCategory}/>
                            <CategoryCard funcion={context.handleAddEconomiaCategory}/>
                            <CategoryCard funcion={context.handleAddChismeCategory}/>
                            <CategoryCard funcion={context.handleAddNegocioCategory}/>
                            <CategoryCard funcion={context.handleAddTecnologiaCategory}/>
                            <CategoryCard funcion={context.handleAddOpinionCategory}/>
                            <CategoryCard funcion={context.handleAddViajesCategory}/>
                            <CategoryCard funcion={context.handleAddModaCategory}/>
                        </Flex>
                    <Button onClick={()=>context.handleCategoriesInUser(context.state.loggedUser._id)}>update favourite categories</Button>
                    <NavbarComponent/>
                </Box>
            )}
        </MyContext.Consumer>
    )
}

export default SelectFavouriteCategories;