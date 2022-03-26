import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';

import {useCartContext} from '../../context/CartContext';

const Validate = values => {
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

    const [orden, setOrden] = useState([]);

    const {productosCarrito, totalCarrito, limpiarProductos} = useCartContext();


    // Pass the useFormik() hook initial form values and a submit function that will
        // be called when the form is submitted
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
            Validate,
            onSubmit: values => {
                let id = Math.floor((Math.random() * (20000-10000))+10000);
                setOrden([
                    values,
                    {items: productosCarrito,
                    id: id,
                    total: totalCarrito}])
                setMostrar(true);
            },
        });

    return(<>
        {mostrar === false ? 
            
    <div className='container border col-6 rounded p-3 mt-5'>

    <Form onSubmit={formik.handleSubmit}> 
        <Row className="mb-4">
            <Form.Group as={Col}>
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control 
                id="nombre"
                name="nombre"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}/>
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
                type="direccion"
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
                type="vivienda"
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
                type="ciudad"
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
                type="barrio"
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
                type="zip"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.zip}/>
                {formik.touched.zip && formik.errors.zip ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.zip}</div> : null}
            </Form.Group>
        </Row>

            <Button variant="primary" type="submit" className='text-light mt-2'>
                Enviar
            </Button>
        </Form>

    </div> :     
    
    <div className='container mt-4'>

        <h1>Información de la Compra</h1>

        <hr/>

        {productosCarrito.map(e => {

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

                            <ul className='list-unstyled mb-0'>
                                <li>Autor:</li>
                                <li>Editorial:</li>
                                <li>Serie:</li>
                                <li>Nº de páginas:</li>
                            </ul>




                    </div>
                </div>

            </div>

            </div>
            <hr/>

        </>

        )

        })
        }

        <h2>Total: ${orden[1].total}.00</h2>

        <hr/>

        <h2>Detalles</h2>

        {   <>

            <ul className='list-unstyled'>
                <li><b>Nombre:</b> {orden[0].nombre}</li>
                <li><b>Email:</b> {orden[0].email}</li>
                <li><b>Dirección:</b> {orden[0].direccion}</li>
                <li><b>Domicilio:</b> {orden[0].vivienda}</li>
                <li><b>Ciudad:</b> {orden[0].ciudad}</li>
                <li><b>Barrio:</b> {orden[0].barrio}</li>
                <li><b>Código Postal:</b> {orden[0].zip}</li>
            </ul>

            <h3>Id: {orden[1].id}</h3>

            </>
        }


        <NavLink to='/'><button className='btn btn-primary mb-5 text-light' onClick={limpiarProductos}>Finalizar pedido</button></NavLink>

    </div> 


    }
    </>
    )

}