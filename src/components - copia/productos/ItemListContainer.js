import React from 'react';

import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    return(
            <div className='container d-flex flex-wrap'>

                <ItemList tipo={props.tipo} filtro={props.filtro} productos={props.productos}/>

            </div>
        );
}

export default ItemListContainer;