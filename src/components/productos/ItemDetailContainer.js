import React from 'react';

import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(props){

    return (
        <>

        <ItemDetail imagen={props.imagen} titulo={props.titulo} descripcion={props.descripcion} stock={props.stock} precio={props.precio}/>

        </>
    );

}