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

                <div className="card p-3">

                <NavLink className="text-dark text-decoration-none" to={`/Akira-Comics/item/${productoDetalle.id}`}>

                    <div className='cursor-pointer'>

                        <img className='mb-3 w-100 imagenAlto' src={productoDetalle.imagen} alt='Producto' />

                        <h4 className='text-truncate'>{productoDetalle.titulo}</h4>

                    </div>

                </NavLink>

                    <div className="mt-auto">

                        <div className='d-flex justify-content-between align-items-end'>

                            <div>

                                <h4>{productoDetalle.precio}</h4>

                                <span>Stock: {productoDetalle.stock}</span>

                            </div>

                            {productoDetalle.stock !== "0" && <ItemCount producto={productoDetalle} stock={productoDetalle.stock} contador={contador} botonRestar={botonRestar} botonSumar={botonSumar} apretado={nuevaLista}/>}

                        </div>

                        {

                            productoDetalle.stock !== "0" &&
                            
                            <div className='d-flex justify-content-between'>

                                <div className='col-4'>

                                <AgregarProductos textoAgregar={"Añadido"} contadorCarrito={contadorCarrito} agregarProductos={agregarProductos} contador={contador} producto={productoDetalle} agregarFuncion={onAdd} cambioEstado={cambioEstado} apretado={nuevaLista} cambioVisible={visible}/>

                                </div>

                                <div className='col-7'>

                                {nuevaLista[0] && <NavLink to='/Akira-Comics/carrito'><button className='btn btn-primary mt-3 botonTerminarCompra w-100'>Terminar compra</button></NavLink>}

                                </div>

                        </div>}

                    </div>

                </div>
            

        );
}