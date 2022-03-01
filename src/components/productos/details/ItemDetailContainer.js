import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import {ThemeContext} from '../../../context/ThemeContext'

import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(){

    const listaProductos = useContext(ThemeContext);

    const {id} = useParams();

    return <React.Fragment>

    {

    listaProductos.map(e=>{

        return (
            <div className='container'>
                {

                e.id === id &&

                <ItemDetail imagen={e.imagen} titulo={e.titulo} descripcion={e.descripcion} stock={e.stock} precio={e.precio}/>

                }
            </div>
        )
        

    })
    
    }

    </React.Fragment>

}