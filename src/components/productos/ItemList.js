import React, {useEffect, useState } from 'react';

import {useFirebaseContext} from '../../firebase/Firebase'

import Item from './Item';

export default function ItemList(props){

    const {productosHook} = useFirebaseContext();

    const listaProductos = productosHook;

    const [productos, setProductos] = useState([]);

    useEffect(()=>{

        const task = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(listaProductos);
            }, 1000);
        })
        task.then(resultado => {
            setProductos(resultado);
        });

    }, [listaProductos])

    const convertirTipoComic = (string) => {
        let tipoComicSinLetraFinal = string.substring(0, string.length - 1);
        let tipoComicFinal = tipoComicSinLetraFinal[0].toUpperCase() + tipoComicSinLetraFinal.slice(1);

        return tipoComicFinal
    }

    return <React.Fragment>

    {
        productos.length === 0 ?
        <>
            <div className='w-100 d-flex justify-content-center mt-3'>
                <div className="loading show">
                    <div className="spin"></div>
                </div>
            </div>
        </>
        :

        productos.map(e=>{

            return(
                <>
                {
                    props.filtro === undefined ?

                    props.tipo === undefined ?

                    <div key={e.id} className='d-flex flex-column col-md-3 col-6 p-3 rounded product-block'>

                        <Item id={e.id} imagen={e.imagen} titulo ={e.titulo} precio={e.precio} stock={e.stock} descripcion={e.descripcion}/>

                    </div> : 
                    
                    convertirTipoComic(props.tipo) === e.tipo &&

                    <div key={e.id} className='d-flex flex-column col-md-3 col-6 p-3 rounded product-block'>

                        <Item id={e.id} imagen={e.imagen} titulo ={e.titulo} precio={e.precio} stock={e.stock} descripcion={e.descripcion}/>

                    </div>
                    
                    : props.filtro === "ofertas" ? 
                    
                    e.oferta === props.filtro &&
                        
                        <div key={e.id} className='d-flex flex-column col-md-3 col-6 p-3 rounded product-block'>

                            <Item id={e.id} imagen={e.imagen} titulo ={e.titulo} precio={e.precio*(1/e.oferta)} stock={e.stock} descripcion={e.descripcion}/>

                        </div>

                    :

                    e.serie.toLocaleLowerCase().replace(/\s/g, '') === props.filtro &&
                        
                        <div key={e.id} className='d-flex flex-column col-md-3 col-6 p-3 rounded product-block'>

                            <Item id={e.id} imagen={e.imagen} titulo ={e.titulo} precio={e.precio} stock={e.stock} descripcion={e.descripcion}/>

                        </div>}

            </>

            )

                })
            }


        </React.Fragment>;

}