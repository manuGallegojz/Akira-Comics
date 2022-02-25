import React from 'react';

//Header

import Header from "../header/Header";

//Productos

import ItemListContainer from "../productos/ItemListContainer";

export default function Home (props) {
  
    return <>

        <Header/>

        <ItemListContainer productos={props.productos}/>

      </>
}
