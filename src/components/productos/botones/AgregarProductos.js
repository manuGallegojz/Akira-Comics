import React from 'react';

export default function AgregarProductos(props){

    return <>

        <button className={props.apretado[0] || props.cambioVisible ? 'btn btn-primary mt-3 botonAnadir w-100 disabled text-light' : 'btn btn-primary mt-3 botonAnadir w-100 text-light'} onClick={()=>{props.agregarFuncion(props.producto, props.contador, props.contadorCarrito, props.agregarProductos ); props.cambioEstado()}}>{props.apretado[0] ? props.textoAgregar : "Agregar"}</button>

    </>;

}