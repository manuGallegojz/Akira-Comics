import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import {useCartContext} from '../../context/CartContext';

export default function CheckOut(){

    const [mostrar, setMostrar] = useState(false);

    const [orden, setOrden] = useState({});

    const {productosCarrito, totalCarrito, limpiarProductos} = useCartContext();

    let enviarOrden = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);

        var id = Math.floor((Math.random() * (20000-10000))+10000);

        console.log(id); 

        setOrden({
            buyer: {
                nombre: e.target[0].value,
                email: e.target[1].value,
                direccion: e.target[2].value,
                domicilio:  e.target[3].value,
                ciudad: e.target[4].value,
                barrio:  e.target[5].value,
                postal: e.target[6].value
            },
            items: productosCarrito,
            id: id,
            total: totalCarrito
        })

        setMostrar(true);

    }

    return(<>
        {mostrar === false ? 
            
    <div className='container border col-6 rounded p-3'>

     <Form onSubmit={enviarOrden}>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail" required>
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control required/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required/>
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Dirección</Form.Label>
            <Form.Control required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Casa, deparatamento, etc...</Form.Label>
            <Form.Control required/>
        </Form.Group>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control required/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Barrio</Form.Label>
            <Form.Control required/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control required/>
            </Form.Group>
        </Row>

        {/*<NavLink to='/checkout/info'>*/
            <Button variant="primary" type="submit" className='text-light'>
                Enviar
            </Button>
        /*</NavLink>*/}
        </Form>

    </div> : 

    <div className='container'>

            <h1>Información de la Compra</h1>

            {/*console.log(orden.id)*/}

            {orden.items.map(e => {

            const productoMuestra = e[0];

            const cantidad = e[1];

                return(
            <>

            <div className='d-flex my-5 card flex-row py-4'>

                <img className='w-25 imagenAlto' src={productoMuestra.imagen} alt="Portada" />

                <div className='d-flex flex-column justify-content-between py-3'>
                    <div>
                        <h3>{productoMuestra.titulo}</h3>
                        <p className='w-100'>{productoMuestra.descripcion}</p>
                        <h6>{productoMuestra.precio}</h6>
                    </div>
                    <h5>x{cantidad}</h5>
                </div>

                <div className='w-50 d-flex flex-column justify-content-center'>

                </div>

            </div>

            </>

            )

            })
            }

            <h2>Total: ${orden.total}.00</h2>

            <hr/>

            <h2>Detalles</h2>

            {   <>
                
                <ul className='list-unstyled'>
                    <li><b>Nombre:</b> {orden.buyer.nombre}</li>
                    <li><b>Email:</b> {orden.buyer.email}</li>
                    <li><b>Dirección:</b> {orden.buyer.direccion}</li>
                    <li><b>Domicilio:</b> {orden.buyer.domicilio}</li>
                    <li><b>Ciudad:</b> {orden.buyer.ciudad}</li>
                    <li><b>Barrio:</b> {orden.buyer.barrio}</li>
                    <li><b>Código Postal:</b> {orden.buyer.postal}</li>
                </ul>

                <h3>Id: {orden.id}</h3>

                </>
            }
        

    <NavLink to='/'><button className='btn btn-primary mb-5 text-light' onClick={limpiarProductos}>Volver a la Tienda</button></NavLink>
            
    </div>

    }
    </>
    )

}