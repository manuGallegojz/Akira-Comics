import React from 'react';

//Productos

import ItemListContainer from "../productos/ItemListContainer";
import Filtros from "../filtros/Filtros";


export default function Tienda(props) {

  console.log(props.productos)
  
    return (
    <div className='container'>

      <Filtros />

      <ItemListContainer tipo={props.tipo} filtro={props.filtro}/>

    </div>)


}
