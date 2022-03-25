import React from 'react';
import { useParams } from 'react-router-dom';

//Productos

import ItemListContainer from "../productos/ItemListContainer";
import Filtros from "../filtros/Filtros";

export default function Tienda(props) {

  const {idCategoria} = useParams();
  const {tipoComic} = useParams();

  let tipoComicSinLetraFinal = tipoComic.substring(0, tipoComic.length - 1);
  let tipoComicFinal = tipoComicSinLetraFinal[0].toUpperCase() + tipoComicSinLetraFinal.slice(1);
  
    return (
    <div className='container'>

      <Filtros />

      <ItemListContainer tipo={tipoComicFinal} filtro={idCategoria}/>

    </div>)


}
