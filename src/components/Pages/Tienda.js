import React from 'react';

//Productos

import ItemListContainer from "../productos/ItemListContainer";
import Filtros from "../filtros/Filtros";

export default function Tienda() {

    return (
    <div className='container'>

      <Filtros />

      <ItemListContainer/>

    </div>)


}
