import React from 'react';
import Filtros from "../filtros/Filtros";

//Header

import Header from "../header/Header";

//Productos

import ItemListContainer from "../productos/ItemListContainer";

export default function Home () {
  
    return <>

        <Header/>

        <Filtros />

        <ItemListContainer/>

      </>
}
