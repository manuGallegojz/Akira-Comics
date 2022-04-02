import React from 'react';
import { useParams } from 'react-router-dom';

import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    
    const {tipoComic} = useParams();
    
    const {idCategoria} = useParams();

    return(
            <div className='container d-flex flex-wrap mt-4'>

                <ItemList tipo={tipoComic} filtro={idCategoria} filtroMuestra={props.filtroMuestra} cantidad={props.cantidad}/>

            </div>
        );
}

export default ItemListContainer;