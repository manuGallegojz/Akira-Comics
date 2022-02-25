import React from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(props){

    let arregloProductos = props.productos;

    const {id} = useParams();

    return <React.Fragment>

    {

    arregloProductos.map(e=>{

        return (
            <div className='container'>
                {

                e.id === id &&

                //<h1>No se mostró nada</h1>
                <ItemDetail imagen={e.imagen} titulo={e.titulo} descripcion={e.descripcion} stock={e.stock} precio={e.precio}/>

                }
            </div>
        )
        

    })
    
    }

    </React.Fragment>

}