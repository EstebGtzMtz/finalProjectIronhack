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
                            <CategoryCard funcion={context.handleAddDeportesCategory} cardCategoryImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583349203/finalProyectIronhack/football-player-carrying-brown-football-1618269.jpg')"/>
                            <CategoryCard funcion={context.handleAddCulturaSociedadCategory} cardCategoryImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583349222/finalProyectIronhack/person-in-traditional-dress-at-the-street-784707.jpg')"/>
                            <CategoryCard funcion={context.handleAddMexicoCategory} cardCategoryImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583349178/finalProyectIronhack/people-near-indian-flag-1573471.jpg')"/>
                            <CategoryCard funcion={context.handleAddPoliticaCategory} cardCategoryImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583349176/finalProyectIronhack/person-dropping-paper-on-box-1550337.jpg')"/>
                            <CategoryCard funcion={context.handleAddMundoCategory} cardCategoryImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583349190/finalProyectIronhack/blur-close-up-figure-focus-346696.jpg')"/>
                            <CategoryCard funcion={context.handleAddEconomiaCategory} cardCategoryImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583349205/finalProyectIronhack/close-up-of-coins-315788.jpg')"/>
                            <CategoryCard funcion={context.handleAddChismeCategory} cardCategoryImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583350034/finalProyectIronhack/person-whispering-to-man-s-ear-2947922.jpg')"/>
                            <CategoryCard funcion={context.handleAddNegocioCategory} cardCategoryImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583349172/finalProyectIronhack/adult-blur-boss-business-288477.jpg')"/>
                            <CategoryCard funcion={context.handleAddTecnologiaCategory} cardCategoryImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583349170/finalProyectIronhack/blur-close-up-code-computer-546819.jpg')"/>
                            <CategoryCard funcion={context.handleAddOpinionCategory} cardCategoryImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583349175/finalProyectIronhack/woman-wearing-teal-dress-sitting-on-chair-talking-to-man-2422280.jpg')"/>
                            <CategoryCard funcion={context.handleAddViajesCategory} cardCategoryImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583349219/finalProyectIronhack/woman-walking-on-pathway-while-strolling-luggage-1008155.jpg')"/>
                            <CategoryCard funcion={context.handleAddModaCategory} cardCategoryImage="url('https://res.cloudinary.com/dptmtx6uu/image/upload/v1583349205/finalProyectIronhack/adult-beautiful-elegant-eyewear-291762.jpg')"/>
                        </Flex>
                    <Button onClick={()=>context.handleCategoriesInUser(context.state.loggedUser._id)}>update favourite categories</Button>
                    <NavbarComponent/>
                </Box>
            )}
        </MyContext.Consumer>
    )
}

export default SelectFavouriteCategories;