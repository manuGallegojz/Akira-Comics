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

    const {contadorCarrito, agregarProductos, productosIdCarrito} = useCartContext();
    const {onAdd} = useProductsContext();

    const cambioEstado = ()=>{
        setVisible(true);
        
    }

    let id = parseInt(props.id);

    let nuevaLista = [];
    
    if(productosIdCarrito[0]){

        nuevaLista = productosIdCarrito.filter(e => e === id);

    }

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

                    <ItemCount producto={productoDetalle} stock={productoDetalle.stock} contador={contador} botonRestar={botonRestar} botonSumar={botonSumar} apretado={nuevaLista} cambioVisible={visible}/>

                <div className='w-50'>

                    <AgregarProductos textoAgregar={"¡Producto Añadido al Carrito!"} contadorCarrito={contadorCarrito} agregarProductos={agregarProductos} contador={contador} producto={productoDetalle} agregarFuncion={onAdd} cambioEstado={cambioEstado} apretado={nuevaLista} cambioVisible={visible}/>

                    {nuevaLista[0] && <NavLink to='/Akira-Comics/carrito'><button className='btn btn-primary mt-3 botonTerminarCompra w-100'>Terminar compra</button></NavLink>}

                </div>
                
                </>
                }

            </div>

        </div>
    );

}