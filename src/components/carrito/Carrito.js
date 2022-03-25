import React from 'react';
import {useCartContext} from '../../context/CartContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Carrito(){

    const {productosCarrito, limpiarProductos, quitarProductos, totalCarrito} = useCartContext();

    return(
        <div className='container mt-4'>
            <div className='d-flex justify-content-between'>
                <h1>Carrito</h1>
                {productosCarrito.length === 0 ? null : productosCarrito.length === 1 ? <h1>{productosCarrito.length} Item</h1> : <h1>{productosCarrito.length} Items</h1>}
            </div>

            <hr/>

            {

            productosCarrito.length !== 0 ?  

            productosCarrito.map(e => {

            const productoMuestra = e[0];

            const cantidad = e[1];

                return(
                <>
            <div className='d-flex'>

            <div className='d-flex my-2 flex-row py-4 col-12'>

                <img className='col-3 imagenAlto' src={productoMuestra.imagen} alt="Portada" />

                <div className='col-9 d-flex flex-column justify-content-between'>
                    <div className='d-flex flex-column justify-content-between'>

                        <div>

                            <div className='d-flex justify-content-center mb-4'>
                                <div className='w-100 bg-light border-bottom border-primary align-items-center col-12 d-flex'>
                                    <h2 className='p-3 mb-0 col-11 text-truncate'>{productoMuestra.titulo}</h2>
                                    <div className='col-1 d-flex justify-content-center'>
                                        <FontAwesomeIcon className='cursor-pointer' onClick={()=>{quitarProductos(productoMuestra, cantidad)}} icon={faTrash} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        
                            <div>

                                <h4>{productoMuestra.precio}</h4>
                                <span className='text-muted'>Stock: {cantidad}</span>

                            </div>

                            <ul className='list-unstyled mb-0'>
                                <li>Autor:</li>
                                <li>Editorial:</li>
                                <li>Serie:</li>
                                <li>Nº de páginas:</li>
                            </ul>




                    </div>
                </div>

            </div>

            </div>
            <hr/>
            </>

            )

            })
            
            : 
            
            
            <div className='carritoVacio p-3 my-4 d-flex flex-column justify-content-center'>

                <span>Carrito Vacío...</span>

            </div>
            }

            {productosCarrito.length !== 0 && <h2>Total: ${totalCarrito}.00</h2>}

            <div className='d-flex mt-4'>

                {productosCarrito.length !== 0 && <NavLink to='/checkout'><button className='btn btn-primary mb-5 text-light'>Terminar Compra</button></NavLink>}

                {productosCarrito.length !== 0 && <button className='btn btn-primary mb-5 ms-4 text-light' onClick={limpiarProductos}>Vaciar Carrito</button>}

                {productosCarrito.length === 0 && <NavLink to='/'><button className='btn btn-primary mb-5 text-light' onClick={limpiarProductos}>Volver a la tienda</button></NavLink>}

            </div>


        </div>
    )

}