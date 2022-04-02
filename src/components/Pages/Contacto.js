import React from 'react'; 
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'

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
        direccion: '',
        vivienda: '',
        ciudad: '',
        barrio: '',
        zip: ''
        },
        Validate,
        onSubmit: values => {
            let id = Math.floor((Math.random() * (20000-10000))+10000);
            console.log(id);
        }
    });

    // const formik = useFormik({
    //     initialValues: {
    //     nombre: '',
    //     email: '',
    //     asunto: '',
    //     mensaje: ''
    //     },
    //     Validate,
    //     onSubmit: values => {
    //         alert("...");
    //         /*Swal.fire({
    //         confirmButtonColor: '#ED2E38',
    //         title:'¡Enviado!',
    //         text: cambiarNombre(values.nombre) + ', te responderemos lo antes posible.',
    //         icon:'success'})*/
    //     },
    // });

    return(
        <>
            <iframe className="mb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13131.11583214668!2d-58.51084875723259!3d-34.635025782028116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9b68fab95b5%3A0xbaf48a44b765c9eb!2sVilla%20Luro%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1646788102738!5m2!1ses-419!2sar" style={{ border: 0 }} frameBorder="0" width="100%" aria-hidden="false" height="450" allowFullScreen="" loading="lazy" tabIndex="0" />

            <section className="container">

                <div className="row justify-content-center">

                <div className="row">

                    <div className="col-lg-6 col-12 text-center text-lg-start mb-5 mb-md-5 mb-lg-0">

                        <div className="col-12 mb-5 mb-lg-2">

                                <div className="mb-4 me-lg-4 d-lg-inline float-lg-start">

                                    </div>

                                    <div className="d-lg-inline-block">

                                <h4 className="serif verde">Teléfono</h4>
                                
                                    <p className="sanserif">15-1234-4321</p>
                                    <p className="sanserif">11-5678-8765</p>
                
                                </div>

                        </div>


                        <div className="col-12 mb-5 mb-lg-2">

                            <div className="mb-4 me-lg-4 d-lg-inline float-lg-start">

                                </div>

                                <div className="d-lg-inline-block">

                            <h4 className="serif rosa">Dirección</h4>
                            
                                <p className="sanserif">Villa Luro, CABA, Argentina y</p>
                                <p className="sanserif">Flores, CABA, Argentina</p>

                                </div>

                        </div>
                            

                        <div className="col-12 mb-5 mb-lg-0">

                            <div className="mb-4 me-lg-4 d-lg-inline float-lg-start">

                            </div>

                            <div className="d-lg-inline-block">

                            <h4 className="serif verde">Email</h4>

                                <p className="sanserif">akiracomics@gmail.com</p>

                            </div>

                            </div>

                </div>


                <div className="col-lg-6 col-12 sanserif">

                        <h4 className="serif verde">Mandanos un Mensaje</h4>
                        
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
                        </Form>

                </div>

            </div>

            </div>

            </section>
        </>
        )
    }