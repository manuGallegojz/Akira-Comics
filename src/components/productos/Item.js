import React from 'react';

import BotonesCantidad from "./CantidadProductos";
import BotonesAgregar from "./AgregarProducotos";

export default function Item(props){

    return(

            <div key={props.id} className='d-flex flex-column col-md-3 col-6 p-3 rounded product-block'>

                <div className="card p-3">

                    <img className='mb-3 w-100' src={props.imagen} alt='Producto'/>

                    <h4 className='text-truncate'>{props.titulo}</h4>

                    <div className="mt-auto">

                        <div className='d-flex justify-content-between align-items-end'>

                            <div>

                                <h4>{props.precio}</h4>

                                <span>Stock: {props.stock}</span>

                            </div>

                            <BotonesCantidad stock={props.stock}/>

                        </div>

                        <BotonesAgregar stock={props.stock}/>
                
                    </div>

                </div>

            </div>

        );
}