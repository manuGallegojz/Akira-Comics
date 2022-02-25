import React, { useEffect, useState } from 'react';

import Item from './Item';

export default function ItemList(props){

    const [usuarios ,setUsuarios] = useState([]);

    let listaProductos = props.productos;

    useEffect(()=>{

        const task = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(listaProductos);
            }, 1000);
        })
        task.then(resultado => {
            setUsuarios(resultado);
        });

    }, [listaProductos])

    return <React.Fragment>

    {
        usuarios.length === 0 ?
        <>
            <div className='w-100 d-flex justify-content-center'>
                <div className="loading show">
                    <div className="spin"></div>
                </div>
            </div>
        </>
        :

        usuarios.map((e, index)=>{
            
            return(
                <>
                {
                    props.filtro === undefined ?

                    props.tipo === undefined ?

                    <div key={index} className='d-flex flex-column col-md-3 col-6 p-3 rounded product-block'>

                        <Item id={index} imagen={e.imagen} titulo ={e.titulo} precio={e.precio} stock={e.stock} descripcion={e.descripcion}/>

                    </div> : 
                    
                    props.tipo === e.tipo &&

                    <div key={index} className='d-flex flex-column col-md-3 col-6 p-3 rounded product-block'>

                        <Item id={index} imagen={e.imagen} titulo ={e.titulo} precio={e.precio} stock={e.stock} descripcion={e.descripcion}/>

                    </div>
                    
                    :

                    e.serie === props.filtro &&
                        
                        <div key={index} className='d-flex flex-column col-md-3 col-6 p-3 rounded product-block'>

                            <Item id={index} imagen={e.imagen} titulo ={e.titulo} precio={e.precio} stock={e.stock} descripcion={e.descripcion}/>

                        </div>}

                

            </>

            )

                })
            }


        </React.Fragment>;

}