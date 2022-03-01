import React from 'react';

export default function ItemCount(props){

    return <>

        <div className='d-flex'>

            <button className='btn btn-primary botonCantidad' onClick={props.botonRestar}>-</button>

                <p className='mx-3 pt-1'>{props.cantidad}</p>

            <button className='btn btn-primary botonCantidad' onClick={props.botonSumar}>+</button>

        </div>

    </>;

}