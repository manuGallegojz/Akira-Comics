import React from 'react';

export default function Carrito(){

    return(
        <div className='container'>
            <h1>Carrito</h1>

            <div className='carritoVacio p-3 my-4 d-flex flex-column justify-content-center'>

                <span>Carrito Vacío...</span>

            </div>

            <button className='btn btn-primary mb-5'>Volver a la tienda</button>
        </div>
    )

}