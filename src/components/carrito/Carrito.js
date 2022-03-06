import React from 'react';
import {useCartContext} from '../../context/CartContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Carrito(){

    const {productosCarrito, limpiarProductos, quitarProductos} = useCartContext();

    let totalProductos = 0;

    return(
        <div className='container'>
            <h1>Carrito</h1>

            {
            productosCarrito.length !== 0 ? 

            productosCarrito.map((e, index) => {
                
            const productoMuestra = e[0];

            const cantidad = e[1];

            const precio = productoMuestra.precio;

            totalProductos += parseFloat(precio.slice(1));

                return(
            <>

            <div className='d-flex my-5 card flex-row py-4'>

                <img className='w-25 imagenAlto' src={productoMuestra.imagen} alt="Portada" />

                <div className='d-flex flex-column justify-content-between py-3'>
                    <div>
                        <h3>{productoMuestra.titulo}</h3>
                        <p className='w-100'>{productoMuestra.descripcion}</p>
                        <h6>{productoMuestra.precio}</h6>
                    </div>
                    <h5>x{cantidad}</h5>
                </div>

                <div className='w-50 d-flex flex-column justify-content-center'>

                <FontAwesomeIcon className='cursor-pointer' onClick={()=>{quitarProductos(productoMuestra, cantidad)}} icon={faTrash} />

                </div>

            </div>

            </>

            )

            })
            
            : 
            
            
            <div className='carritoVacio p-3 my-4 d-flex flex-column justify-content-center'>

                <span>Carrito Vacío...</span>

            </div>
            }

            {productosCarrito.length !== 0 && <h2>Total: ${totalProductos}.00</h2>}

            <div className='d-flex mt-4'>

                <NavLink to='/Akira-Comics'><button className='btn btn-primary mb-5'>Volver a la tienda</button></NavLink>

                {productosCarrito.length !== 0 && <button className='btn btn-primary mb-5 ms-4' onClick={limpiarProductos}>Vaciar Carrito</button>}

            </div>


        </div>
    )

}