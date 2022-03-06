import React from 'react';

export default function AgregarProductos(props){

    return <>

        <button className={props.apretado ? 'btn btn-primary mt-3 botonAnadir w-100 disabled' : 'btn btn-primary mt-3 botonAnadir w-100'} onClick={()=>{props.agregarFuncion(props.producto, props.contador, props.contadorCarrito, props.agregarProductos ); props.cambioEstado()}}>{props.estadoAgregar}</button>

    </>;

}