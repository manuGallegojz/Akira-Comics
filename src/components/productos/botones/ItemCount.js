import React from 'react';

export default function ItemCount(props){

    console.log(props.apretado);

    return <>

        <div className='d-flex'>

            <button className={props.apretado[0] || props.cambioVisible ? 'btn btn-primary botonCantidad disabled' : 'btn btn-primary botonCantidad' } onClick={props.botonRestar}>-</button>

                <p className='mx-3 pt-1'>{props.contador}</p>

            <button className={props.apretado[0] || props.cambioVisible ? 'btn btn-primary botonCantidad disabled' : 'btn btn-primary botonCantidad' } onClick={props.botonSumar}>+</button>

        </div>

    </>;

}