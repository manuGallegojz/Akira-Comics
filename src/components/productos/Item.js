import React, { useState } from 'react';

import ItemCount from "./botones/ItemCount";
import AgregarProductos from "./botones/AgregarProductos";
import { NavLink } from 'react-router-dom';

export default function Item(props){

    const [contador, setContador] = useState(1);

    const [visible, setVisible] = useState(false);
    
    const onAdd = () => {

        setVisible(true);

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


    return(

                <div className="card p-3">

                <NavLink className="text-dark text-decoration-none" to={`/Akira-Comics/item/${props.id}`}>

                    <div className='cursor-pointer'>

                        <img className='mb-3 w-100' src={props.imagen} alt='Producto' />

                        <h4 className='text-truncate'>{props.titulo}</h4>

                    </div>

                </NavLink>

                    <div className="mt-auto">

                        <div className='d-flex justify-content-between align-items-end'>

                            <div>

                                <h4>{props.precio}</h4>

                                <span>Stock: {props.stock}</span>

                            </div>

                            {props.stock !== "0" && <ItemCount stock={props.stock} cantidad={contador} botonRestar={botonRestar} botonSumar={botonSumar}/>}

                        </div>

                        {

                            props.stock !== "0" &&
                            
                            <div className='d-flex justify-content-between'>

                                <div className='col-4'>

                                <AgregarProductos stock={props.stock} cantidad={contador} agregarFuncion={onAdd}/>

                                </div>

                                <div className='col-7'>

                                {visible ? <a href='/Akira-Comics/carrito'><button className='btn btn-primary mt-3 botonTerminarCompra w-100'>Terminar compra</button></a> : null}

                                </div>

                        </div>}

                    </div>

                </div>
            

        );
}