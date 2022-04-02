import React from 'react'; 
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

import iconoMapa from "../../assets/img/icons/iconoMapa.svg";
import iconoTelefono from "../../assets/img/icons/iconoTelefono.svg";
import iconoEmail from "../../assets/img/icons/iconoEmail.svg";

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

    if (!values.asunto) {
        errors.asunto = `Campo obligatorio.`;
    } else if (values.asunto.length > 40) {
        errors.asunto = 'Debe tener menos de 40 caracteres.';
    }

    if (!values.mensaje) {
        errors.mensaje = `Campo obligatorio.`;
    } else if (values.mensaje.length > 180) {
        errors.mensaje = 'Debe tener menos de 180 caracteres.';
    }

    return errors;
};

export default function Contacto(){

    function cambiarNombre(string) {  
        let textoMinusculas = string.toLowerCase();
        let textoNuevo = textoMinusculas[0].toUpperCase() + string.slice(1); 
        return textoNuevo;
    } 

    const formik = useFormik({
        initialValues: {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
        },
        validate,
        onSubmit: values => {
            Swal.fire({
            confirmButtonColor: '#ED2E38',
            title:'¡Enviado!',
            text: cambiarNombre(values.nombre) + ', te responderemos lo antes posible.',
            icon:'success'})
        },
    });

    return(
        <>
            <iframe className="mb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13131.11583214668!2d-58.51084875723259!3d-34.635025782028116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9b68fab95b5%3A0xbaf48a44b765c9eb!2sVilla%20Luro%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1646788102738!5m2!1ses-419!2sar" style={{ border: 0 }} frameBorder="0" width="100%" aria-hidden="false" height="450" allowFullScreen="" loading="lazy" tabIndex="0" />

            <section className="container">

                <div className="row justify-content-center">

                <div className="row">

                    <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center text-lg-start mb-5 mb-md-5 mb-lg-0">

                        <div className='col-12'>

                        <div className='d-flex justify-content-evenly'>

                            <div className="col-5 mb-5 mb-lg-2 border rounded text-center p-3 escala">

                                <div className='d-flex justify-content-center'>
                                    <div className='col-5 mb-2'>
                                        <img src={iconoTelefono} alt="icono"/>
                                    </div>
                                </div>

                                <h4>Teléfono</h4>
                                    
                                    <p>15-1234-4321</p>
                                    <p>11-5678-8765</p>

                            </div>


                            <div className="col-5 mb-5 mb-lg-2 border rounded text-center p-3 escala">

                                <div className='d-flex justify-content-center'>
                                    <div className='col-5 mb-2'>
                                        <img src={iconoMapa} alt="icono"/>
                                    </div>
                                </div>

                                <div className="d-lg-inline-block">

                                <h4>Dirección</h4>
                                
                                    <p>Villa Luro, CABA, Argentina y</p>
                                    <p>Flores, CABA, Argentina</p>

                                </div>

                            </div>

                        </div>

                        <div className='d-flex justify-content-center mt-4'>

                            <div className="col-5 mb-5 mb-lg-0 border rounded text-center p-3 escala">

                                <div className='d-flex justify-content-center'>
                                    <div className='col-5 mb-2'>
                                        <img src={iconoEmail} alt="icono"/>
                                    </div>
                                </div>

                                <div className="d-lg-inline-block">

                                <h4>Email</h4>

                                    <p>akiracomics@gmail.com</p>

                                </div>

                            </div>

                            </div>

                        </div>

                    </div>


                <div className="col-lg-6 col-12 sanserif">

                        <h4>Mandanos un Mensaje</h4>
                        
                <Form onSubmit={formik.handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            id="nombre"
                            name="nombre"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.nombre}/>
                            {formik.touched.nombre && formik.errors.nombre ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.nombre}</div> : null}
                        </Form.Group>

                    </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                id="email"
                                name="email"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.vivienda}/>
                                {formik.touched.email && formik.errors.email ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.email}</div> : null}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Asunto</Form.Label>
                            <Form.Control
                                id="asunto"
                                name="asunto"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.direccion}/>
                                {formik.touched.asunto && formik.errors.asunto ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.asunto}</div> : null}
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control
                                id="mensaje"
                                name="mensaje"
                                rows={3}
                                as="textarea"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.ciudad}/>
                                {formik.touched.mensaje && formik.errors.mensaje ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.mensaje}</div> : null}
                            </Form.Group>
                        </Row>

                            <Button variant="primary" type="submit" className='text-light mt-2'>
                                Enviar
                            </Button>
                        </Form>

                </div>

            </div>

            </div>

            </section>
        </>
        )
    }