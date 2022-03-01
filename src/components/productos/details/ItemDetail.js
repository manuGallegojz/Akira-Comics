import React, { useState, useContext } from 'react';

import ItemCount from "../botones/ItemCount";
import AgregarProductos from "../botones/AgregarProductos";

import {CartContext} from '../../../context/CartContext'

export default function ItemDetail(props){

    const carritoAgregar = useContext(CartContext);

    console.log(carritoAgregar);

    const [contador, setContador] = useState(1);

    const [visible, setVisible] = useState(false);

    const onAdd = () => {

        setVisible(true);

        carritoAgregar.item = {
            imagen: props.imagen,
            precio: props.precio,
            titulo: props.titulo,
            descripcion: props.descripcion
        };

        carritoAgregar.cantidad = contador;

    }

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


    return (
        <div className='d-flex'>

            <img className="col-5" src={props.imagen} alt="Portada"/>

            <div>

                <h1>{props.titulo}</h1>

                <p>{props.descripcion}</p>

                <div className='mb-3'>

                    <h4>{props.precio}</h4>

                    <span>Stock: {props.stock}</span>

                </div>

                {

                props.stock !== "0" &&  

                <>

                    <ItemCount stock={props.stock} cantidad={contador} botonRestar={botonRestar} botonSumar={botonSumar}/>

                <div className='w-50'>

                    <AgregarProductos stock={props.stock} cantidad={contador} agregarFuncion={onAdd}/>

                    {visible ? <a href='/Akira-Comics/carrito'><button className='btn btn-primary mt-3 botonTerminarCompra w-100'>Terminar compra</button></a> : null}

                </div>
                
                </>
                }

            </div>

        </div>
    );

}