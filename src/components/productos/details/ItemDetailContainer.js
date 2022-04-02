import React from 'react';
import { useParams } from 'react-router-dom';
import {useFirebaseContext} from '../../../firebase/Firebase'

import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(){

    const {productosHook} = useFirebaseContext();

    const listaProductos = productosHook;

    const {id} = useParams();

    return <React.Fragment>

    {

    listaProductos.map((e)=>{

        return (
            <div key={e.id} className='container mt-5'>
                {

                e.id === id &&

                    <ItemDetail autor={e.autor} serie={e.serie} editorial={e.editorial} paginas={e.paginas} id={e.id} imagen={e.imagen} titulo={e.titulo} descripcion={e.descripcion} stock={e.stock} precio={e.precio}/>

                }
            </div>
        )
        

    })
    
    }

    </React.Fragment>

}