import React, { useState } from 'react';

import ItemCount from "./botones/ItemCount";
import AgregarProductos from "./botones/AgregarProductos";
import { NavLink } from 'react-router-dom';

import {useCartContext} from '../../context/CartContext';
import { useProductsContext } from '../../context/ProductsContext';

export default function Item(props){

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

    return(

                <div className="card" key={id}>

                <div className='p-3'>

                    <NavLink className="text-dark text-decoration-none" to={`/item/${productoDetalle.id}`}>

                        <div className='cursor-pointer'>

                            <img className='mb-3 w-100 imagenAlto' src={productoDetalle.imagen} alt='Producto' />
                            
                            <h4 className='text-truncate'>{productoDetalle.titulo}</h4>

                        </div>

                    <hr/>

                    </NavLink>

                        <div className="mt-auto">

                            <div className='d-flex align-items-center mb-2'>

                                <h4 className='col-6 d-flex justify-content-center'>{productoDetalle.precio}</h4>

                                <small className='col-6 d-flex justify-content-center text-muted'>Stock: {productoDetalle.stock}</small>

                            </div>

                            <div className='d-flex justify-content-center'>

                                {productoDetalle.stock !== "0" && <ItemCount producto={productoDetalle} stock={productoDetalle.stock} contador={contador} botonRestar={botonRestar} botonSumar={botonSumar} apretado={nuevaLista}/>}

                            </div>

                </div>
                </div>

                        {

                            productoDetalle.stock !== "0" &&
                            
                            <div className='d-flex justify-content-between'>

                                <div className='col-12'>

                                    <AgregarProductos lista={nuevaLista[0]} contadorCarrito={contadorCarrito} agregarProductos={agregarProductos} contador={contador} producto={productoDetalle} agregarFuncion={onAdd} cambioEstado={cambioEstado} apretado={nuevaLista} cambioVisible={visible}/>

                                </div>

                        </div>}

                    </div>
            

        );
}