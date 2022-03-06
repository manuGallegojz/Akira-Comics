import React, { useEffect, useState } from 'react';

import ItemCount from "../botones/ItemCount";
import AgregarProductos from "../botones/AgregarProductos";

import {useCartContext} from '../../../context/CartContext';
import { useProductsContext } from '../../../context/ProductsContext';

import { NavLink } from 'react-router-dom';

export default function ItemDetail(props){

    let productoDetalle = {
        id:props.id, 
        imagen:props.imagen
        ,titulo:props.titulo
        ,descripcion:props.descripcion
        ,stock:props.stock
        ,precio:props.precio};
    
    const [visible, setVisible] = useState(false);

    const [contador, setContador] = useState(1);

    const [agregado, setAgregado] = useState("Agregar");

    const {contadorCarrito, agregarProductos, productosIdCarrito} = useCartContext();
    const {onAdd} = useProductsContext();

    const cambioEstado = ()=>{
        setVisible(true);
        setAgregado("¡Añadido al carrito!")
    }

    let id = parseInt(props.id);

    //console.log(productosIdCarrito, productosIdCarrito.length, productosIdCarrito[0] === id)

    
/*
    if(productosIdCarrito !== 0){

        let i = 0

        while (i < productosIdCarrito.length) {

            if(productosIdCarrito[i] === id){

                    

                break;

            }

            i++
            
        }

    }*/

    
    
    const botonSumar = ()=>{

        if(productoDetalle.stock > contador){

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

            <img className="col-5 imagenAlto" src={productoDetalle.imagen} alt="Portada"/>

            <div>

                <h1>{productoDetalle.titulo}</h1>

                <p>{productoDetalle.descripcion}</p>

                <div className='mb-3'>

                    <h4>{productoDetalle.precio}</h4>

                    <span>Stock: {productoDetalle.stock}</span>

                </div>

                {

                props.stock !== "0" &&  

                <>

                    <ItemCount producto={productoDetalle} stock={productoDetalle.stock} contador={contador} botonRestar={botonRestar} botonSumar={botonSumar} apretado={visible}/>

                <div className='w-50'>

                    <AgregarProductos estadoAgregar={agregado} contadorCarrito={contadorCarrito} agregarProductos={agregarProductos} contador={contador} producto={productoDetalle} agregarFuncion={onAdd} cambioEstado={cambioEstado} apretado={visible}/>

                    {visible ? <NavLink to='/Akira-Comics/carrito'><button className='btn btn-primary mt-3 botonTerminarCompra w-100'>Terminar compra</button></NavLink> : null}

                </div>
                
                </>
                }

            </div>

        </div>
    );

}