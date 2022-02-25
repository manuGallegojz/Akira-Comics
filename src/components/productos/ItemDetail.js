import React from 'react';

import BotonesCantidad from "./CantidadProductos";
import AgregarProductos from "./AgregarProductos";

export default function ItemDetail(props){

    return (
        <div className='d-flex'>

            <img className="col-5" src={props.imagen} alt="Portada"/>

            <div>

                <h1>{props.titulo}</h1>

                <p>{props.descripcion}</p>

                <div className='mb-3'>

                    <h4>{props.precio}</h4>

                    <span>Stock: {props.stock}</span>

                </div>

                    <BotonesCantidad stock={props.stock}/>

                <div className='w-50'>

                    <AgregarProductos stock={props.stock}/>

                </div>

            </div>

        </div>
    );

}