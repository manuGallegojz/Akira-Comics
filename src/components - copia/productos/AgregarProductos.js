import React from 'react';

export default function AgregarProductos(props){

    const nodoBotonAgregar = document.getElementsByClassName("botonAnadir");

    const botonAnadir = ()=>{

        if(props.stock !== "0"){

        alert("Producto Agregado.");

        }else{

            nodoBotonAgregar.disabled = false;  

        }

    }

    return <>

        <button className='btn btn-primary mt-3 botonAnadir w-100' onClick={botonAnadir}>Añadir</button>

    </>;

}