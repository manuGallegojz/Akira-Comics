import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

import {useCartContext} from '../../context/CartContext';

const validate = values => {
    const errors = {};
    if (!values.nombre) {
        errors.nombre = `Campo obligatorio.`;
    } else if (values.nombre.length > 15) {
        errors.nombre = 'Debe tener menos de 15 caracteres.';
    }

    if (!values.email) {
        errors.email = 'Campo obligatorio.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido.';
    }

    if (!values.direccion) {
        errors.direccion = `Campo obligatorio.`;
    } else if (values.direccion.length > 30) {
        errors.direccion = 'Debe tener menos de 30 caracteres.';
    }

    if (!values.vivienda) {
        errors.vivienda = `Campo obligatorio.`;
    } else if (values.vivienda.length > 50) {
        errors.vivienda = 'Debe tener menos de 50 caracteres.';
    }

    if (!values.ciudad) {
        errors.ciudad = `Campo obligatorio.`;
    } else if (values.ciudad.length > 20) {
        errors.ciudad = 'Debe tener menos de 20 caracteres.';
    }

    if (!values.barrio) {
        errors.barrio = `Campo obligatorio.`;
    } else if (values.barrio.length > 25) {
        errors.barrio = 'Debe tener menos de 25 caracteres.';
    }

    if (!values.zip) {
        errors.zip = `Campo obligatorio.`;
    } else if (values.zip.length > 10) {
        errors.zip = 'Debe tener menos de 10 caracteres.';
    }

    return errors;
};

export default function CheckOut(){

    const [mostrar, setMostrar] = useState(false);

    const {productosCarrito, totalCarrito, limpiarProductos} = useCartContext();

    const [orden, setOrden] = useState(productosCarrito);

    const [total, setTotal] = useState(totalCarrito);

    const [id, setId] = useState();
    
    const [values, setValues] = useState();

        const formik = useFormik({
            initialValues: {
            nombre: '',
            email: '',
            direccion: '',
            vivienda: '',
            ciudad: '',
            barrio: '',
            zip: ''
            },
            validate,
            onSubmit: values => {
                setId(Math.floor((Math.random() * (20000-10000))+10000));
                setTotal(totalCarrito);
                setValues(values);
                setMostrar(true);
                limpiarProductos();
            }
        });

    return(<>
        {mostrar === false ?

    <div className='container border col-6 rounded p-3 mt-5'>

    <form onSubmit={formik.handleSubmit}>
        <Row className="mb-4">
            <Form.Group as={Col}>
            <Form.Label htmlFor="firstName">Nombre y Apellido</Form.Label>
            <Form.Control
                id="nombre"
                name="nombre"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombre}/>
                {formik.touched.nombre && formik.errors.nombre ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.nombre}</div> : null}
            </Form.Group>

            <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}/>
                {formik.touched.email && formik.errors.email ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.email}</div> : null}
            </Form.Group>
        </Row>

        <Form.Group className="mb-4">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
                id="direccion"
                name="direccion"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.direccion}/>
                {formik.touched.direccion && formik.errors.direccion ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.direccion}</div> : null}
        </Form.Group>

        <Form.Group className="mb-4">
            <Form.Label>Casa, deparatamento, etc...</Form.Label>
            <Form.Control
                id="vivienda"
                name="vivienda"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vivienda}/>
                {formik.touched.vivienda && formik.errors.vivienda ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.vivienda}</div> : null}
        </Form.Group>

        <Row className="mb-4">
            <Form.Group as={Col}>
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
                id="ciudad"
                name="ciudad"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ciudad}/>
                {formik.touched.ciudad && formik.errors.ciudad ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.ciudad}</div> : null}
            </Form.Group>

            <Form.Group as={Col}>
            <Form.Label>Barrio</Form.Label>
            <Form.Control
                id="barrio"
                name="barrio"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.barrio}/>
                {formik.touched.barrio && formik.errors.barrio ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.barrio}</div> : null}
            </Form.Group>

            <Form.Group as={Col}>
            <Form.Label>Código Postal</Form.Label>
            <Form.Control
                id="zip"
                name="zip"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.zip}/>
                {formik.touched.zip && formik.errors.zip ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.zip}</div> : null}
            </Form.Group>
        </Row>

            <Button variant="primary" type="submit" className='text-light mt-2'>
                Enviar
            </Button>
        </form>

    </div> :

    <div className='container mt-4'>

        <h1>Información de la Compra</h1>

        <hr/>
 
        {orden.map(e => {

        const producto = e[0];

        const cantidad = e[1];

            return(
        <>

        <div className='d-flex'>

            <div className='d-flex my-2 flex-row py-4 col-12'>

                <img className='col-3 imagenAlto' src={producto.imagen} alt="Portada" />

                <div className='col-9 d-flex flex-column justify-content-between'>
                    <div className='d-flex flex-column justify-content-between'>

                    <div>

                    <div className='d-flex justify-content-center mb-4'>
                        <div className='w-100 bg-light border-bottom border-primary align-items-center col-12 d-flex'>
                            <h2 className='p-3 mb-0 col-11 text-truncate'>{producto.titulo}</h2>
                        </div>
                    </div>

                    </div>


                            <div>

                                <h4>{producto.precio}</h4>
                                <span className='text-muted'>Stock: {cantidad}</span>

                            </div>  

                    </div>
                </div>

            </div>

            </div>
            <hr/>

        </>

        )

        })
        }

        <h2>Total: ${total}</h2>

        <hr/>

        <h2>Detalles</h2>

            <ul className='list-unstyled'>
                <li><b>Nombre:</b> {values.nombre}</li>
                <li><b>Email:</b> {values.email}</li>
                <li><b>Dirección:</b> {values.direccion}</li>
                <li><b>Domicilio:</b> {values.vivienda}</li>
                <li><b>Ciudad:</b> {values.ciudad}</li>
                <li><b>Barrio:</b> {values.barrio}</li>
                <li><b>Código Postal:</b> {values.zip}</li>
            </ul> 

            <h3>Id: {id}</h3>



        <NavLink to='/'><button className='btn btn-primary mb-5 text-light' onClick={()=>{Swal.fire({
            confirmButtonColor: '#ED2E38',
            title:'¡Pedido finalizado!',
            text: "Te estaremos contactando por email lo antes posible.",
            icon:'success'})}}>Finalizar pedido</button></NavLink>

    </div>


    }
    </>
    )

}