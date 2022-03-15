import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Carrito(){

    return(
    <div className='container border col-6 rounded p-3'>

        <Form>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"  />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control />
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Dirección</Form.Label>
            <Form.Control  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Casa, deparatamento, etc...</Form.Label>
            <Form.Control />
        </Form.Group>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Barrio</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control />
            </Form.Group>
        </Row>

        <NavLink to='/checkout/info'>
            <Button variant="primary" type="submit" className='text-light'>
                Enviar
            </Button>
        </NavLink>
        </Form>

    </div>

    )

}