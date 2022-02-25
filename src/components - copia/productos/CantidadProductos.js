import React, { useState } from 'react';

export default function BotonesCantidad(props){

    const [contador, setContador] = useState(1);

    const botonSumar = ()=>{

        if(props.stock > contador){

        setContador(contador+1);

        }

    }

    const botonRestar = ()=>{

        if(contador > 1){

                setContador(contador-1);

        }

    }

    return <>

        <div className='d-flex'>

            <button className='btn btn-primary botonCantidad' onClick={botonRestar}>-</button>

                <p className='mx-3 pt-1'>{contador}</p>

            <button className='btn btn-primary botonCantidad' onClick={botonSumar}>+</button>

        </div>

    </>;

}