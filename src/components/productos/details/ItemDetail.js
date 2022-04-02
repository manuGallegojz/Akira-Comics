import React, { useState } from 'react';

import ItemCount from "../botones/ItemCount";
import AgregarProductos from "../botones/AgregarProductos";

import {useCartContext} from '../../../context/CartContext';
import { useProductsContext } from '../../../context/ProductsContext';

export default function ItemDetail(props){

    let productoDetalle = {
        id:props.id
        ,imagen:props.imagen
        ,titulo:props.titulo
        ,descripcion:props.descripcion
        ,stock:props.stock
        ,precio:props.precio
        ,autor:props.autor
        ,editorial:props.editorial
        ,serie:props.serie
        ,paginas:props.paginas};
    
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
        <>
        <div className='d-flex justify-content-center mb-4'>
            <div className='col-10 bg-light border-bottom border-primary'>
                <h1 className='p-3 mb-0'>{productoDetalle.titulo}</h1>
            </div>
        </div>

        <div className='d-flex justify-content-center'>

            <img className="col-4 imagenAlto border" src={productoDetalle.imagen} alt="Portada"/>

            <div className='col-6 ps-5'>

                <h4>{productoDetalle.precio}</h4>

                <span className='text-muted'>Stock: {productoDetalle.stock}</span>


                <hr/>

                <h6><b>Autor:</b> {productoDetalle.autor}</h6>
                <h6><b>Editorial:</b> {productoDetalle.editorial}</h6>
                <h6><b>Serie:</b> {productoDetalle.serie}</h6>
                <h6><b>Nº de páginas:</b> {productoDetalle.paginas}</h6>

                <hr/>

                {

                props.stock !== "0" &&  

                <>

                    <ItemCount producto={productoDetalle} stock={productoDetalle.stock} contador={contador} botonRestar={botonRestar} botonSumar={botonSumar} apretado={nuevaLista} cambioVisible={visible}/>

                <div className='w-50 mt-3'>

                    <AgregarProductos lista={nuevaLista[0]}  contadorCarrito={contadorCarrito} agregarProductos={agregarProductos} contador={contador} producto={productoDetalle} agregarFuncion={onAdd} cambioEstado={cambioEstado} apretado={nuevaLista} cambioVisible={visible}/>

                </div>

                
                
                </>
                }

            </div>

        </div>

        {productoDetalle.descripcion !== undefined && <div className='d-flex justify-content-center mt-4'>
            <div className='col-10'>
                        
                    <h5>Descripción</h5>

                    <hr />

                    <p>{productoDetalle.descripcion}</p> 

            </div>


        </div>}

        </>
    );

}