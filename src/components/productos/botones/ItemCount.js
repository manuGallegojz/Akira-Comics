import React from 'react';

export default function ItemCount(props){

    return <>

        <div className='d-flex'>

            <button className={props.apretado[0] || props.cambioVisible ? 'btn btn-primary botonCantidad disabled text-light' : 'btn btn-primary botonCantidad text-light' } onClick={props.botonRestar}>-</button>

                <p className='mx-3 pt-1'>{props.contador}</p>

            <button className={props.apretado[0] || props.cambioVisible ? 'btn btn-primary botonCantidad disabled text-light' : 'btn btn-primary botonCantidad text-light' } onClick={props.botonSumar}>+</button>

        </div>

    </>;

}