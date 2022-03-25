import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import {useCartContext} from '../../context/CartContext';

export default function CartWidget(){

    const {productosCarrito, limpiarProductos, quitarProductos, contadorCarrito} = useCartContext();

    let totalProductos = 0;

    const [visibleDesplegable, setVisibleDesplegable] = useState(false)

    return(
            <div className='col-1' onMouseEnter={() => setVisibleDesplegable(true)} id='desplegable'>
            
            <NavLink to="/carrito" className="nav-link text-dark d-flex">
                    <div className='me-3'>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                <span className='titulos'>{contadorCarrito}</span>
            </NavLink>

            {visibleDesplegable && <div className='border bg-white posicionDesplegable w-25 container pb-3 mt-3 fade-in-image' onMouseLeave={() => setVisibleDesplegable(false)}>

            {
            productosCarrito.length !== 0 ? 

            productosCarrito.slice(0 , 3)

            
            
            .map(e => {
                
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

            <NavLink to='/'><button className='btn btn-primary text-light'>Volver a la tienda</button></NavLink>

            {productosCarrito.length !== 0 && <button className='btn btn-primary ms-4 text-light' onClick={limpiarProductos}>Vaciar Carrito</button>}

            </div>}
            </div>
        );
}