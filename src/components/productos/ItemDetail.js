import React, {useEffect, useState} from 'react';

import Modal from 'react-bootstrap/Modal';

import BotonesCantidad from "./CantidadProductos";
import AgregarProductos from "./AgregarProductos";

export default function ItemDetail(props){

    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(()=>{

        if(mostrarModal === "prueba"){

        const task = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(true);
            }, 2000);
        })
        task.then(resultado => {
            setMostrarModal(resultado);
            
            
        });

        }

    })

    return (
        <>

            <div className='cursor-pointer' onClick={() => setMostrarModal("prueba")}>

                <img className='mb-3 w-100' src={props.imagen} alt='Producto' />

                <h4 className='text-truncate'>{props.titulo}</h4>

            </div>

            {/*
                mostrarModal === "prueba" ?

                <>
                <div className='w-100 d-flex justify-content-center'>
                    <div className="loading2 show">
                        <div className="spin"></div>
                    </div>
                </div>
            </>

            :*/
            
                        <Modal
                    show={mostrarModal === true}
                    onHide={() => setMostrarModal(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>  
                            <Modal.Title id="example-custom-modal-styling-title">
                                {props.titulo}
                            </Modal.Title>
                        </Modal.Header>
                            <Modal.Body>
                                <div className='d-flex justify-content-center'>
                                    <img className='mb-3 w-75' src={props.imagen} alt='Producto' />
                                </div>
                            <p className='col-12 text-center'>
                                {props.descripcion}
                            </p>

                            <div className='d-flex justify-content-between align-items-end'>

                                    <div>

                                        <h4>{props.precio}</h4>

                                        <span>Stock: {props.stock}</span>

                                    </div>

                                    <BotonesCantidad stock={props.stock}/>

                                </div>

                            <AgregarProductos stock={props.stock}/>
                            </Modal.Body>
                    </Modal>

            }
            



        </>
    );

}