import React from 'react';

import BotonesCantidad from "./CantidadProductos";
import AgregarProductos from "./AgregarProductos";

export default function Item(props){


    return(

                <div className="card p-3">

                <a className="text-dark text-decoration-none" href={`/item/${props.id}`}>

                    <div className='cursor-pointer'>

                        <img className='mb-3 w-100' src={props.imagen} alt='Producto' />

                        <h4 className='text-truncate'>{props.titulo}</h4>

                    </div>

                </a>

                    <div className="mt-auto">

                        <div className='d-flex justify-content-between align-items-end'>

                            <div>

                                <h4>{props.precio}</h4>

                                <span>Stock: {props.stock}</span>

                            </div>

                            <BotonesCantidad stock={props.stock}/>

                        </div>

                        <AgregarProductos stock={props.stock}/>
                
                    </div>

                </div>
            

        );
}