import React from 'react';

import BotonesCantidad from "./CantidadProductos";
import AgregarProductos from "./AgregarProductos";

import ItemDetailContainer from "./ItemDetailContainer";

export default function Item(props){

    return(

            <div key={props.id} className='d-flex flex-column col-md-3 col-6 p-3 rounded product-block'>

                <div className="card p-3">

                <ItemDetailContainer imagen={props.imagen} titulo={props.titulo} descripcion={props.descripcion} stock={props.stock} precio={props.precio} />

                    <div className="mt-auto">

                        <div className='d-flex justify-content-between align-items-end'>

                            <div>

                                <h4>{props.precio}</h4>

                                <span>Stock: {props.stock}</span>

                            </div>

                            <BotonesCantidad stock={props.stock}/>

                        </div>

                        <AgregarProductos stock={props.stock}/>
                
                    </div>

                </div>

            </div>
            

        );
}