import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import {useCartContext} from '../../context/CartContext'

export default function CartDesplegable(){

    const {productosCarrito, limpiarProductos, quitarProductos} = useCartContext();

    let totalProductos = 0;

    return(
        <>

            <div className='border bg-white posicionDesplegable container pb-3'>

            {
            productosCarrito.length !== 0 ? 

            productosCarrito.map(e => {
                
            const productoMuestra = e[0];

            const cantidad = e[1];

            const precio = productoMuestra.precio;

            totalProductos += parseFloat(precio.slice(1));

                return(
            <>

            <div className='d-flex my-3 card flex-row py-4'>

                <img className='w-50 imagenAlto' src={productoMuestra.imagen} alt="Portada" />

                <div className='d-flex flex-column justify-content-between py-1 col-4'>
                    <div>
                        <h6>{productoMuestra.titulo}</h6>
                    </div>
                    <div>
                        <h6>{productoMuestra.precio}</h6>
                        <h5>x{cantidad}</h5>
                    </div>
                </div>

                <div className='w-50 d-flex flex-column justify-content-center'>

                <FontAwesomeIcon className='cursor-pointer' onClick={()=>{quitarProductos(productoMuestra, cantidad)}} icon={faTrash} />

                </div>

            </div>

            </>

            )

            })

            : 


            <div className='carritoVacio p-3 m-3 d-flex flex-column justify-content-center'>

                <span>Carrito Vacío...</span>

            </div>
            }

            <hr />

            {productosCarrito.length !== 0 && <h4 className='mb-3'>Total: ${totalProductos}.00</h4>}

            <NavLink to='/Akira-Comics'><button className='btn btn-primary'>Volver a la tienda</button></NavLink>

            {productosCarrito.length !== 0 && <button className='btn btn-primary ms-4' onClick={limpiarProductos}>Vaciar Carrito</button>}

            </div>

        </>
    )

}