import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AgregarProductos(props){

    return <>

    {props.lista ? <NavLink to='/carrito'>

        <button className='btn btn-primary botonAnadir w-100 text-light'>Finalizar compra</button>
    
    </NavLink> : <button className='btn btn-dark botonAnadir w-100 text-light' onClick={()=>{props.agregarFuncion(props.producto, props.contador, props.contadorCarrito, props.agregarProductos ); props.cambioEstado()}}>Agregar</button>}
    </>;

}