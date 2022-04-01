import React from 'react'; 
import { Form, Col, Button } from 'react-bootstrap';
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

    if (!values.asunto) {
        errors.asunto = `Campo obligatorio.`;
    } else if (values.asunto.length > 30) {
        errors.asunto = 'Debe tener menos de 30 caracteres.';
    }

    if (!values.mensaje) {
        errors.mensaje = `Campo obligatorio.`;
    } else if (values.mensaje.length > 50) {
        errors.mensaje = 'Debe tener menos de 50 caracteres.';
    }

    return errors;
};
export default function Contacto(){

    const formik = useFormik({
        initialValues: {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
        },
        Validate,
        onSubmit: values => {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        },
    });

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

                        <Form.Group as={Col} className="mb-3">
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

                        <Form.Group as={Col} className="mb-3">
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

                        <Form.Group as={Col} className="mb-3">
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control
                            id="asunto"
                            name="asunto"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.asunto}/>
                            {formik.touched.asunto && formik.errors.asunto ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.asunto}</div> : null}
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Dejanos un mensaje</Form.Label>
                        <Form.Control
                            id="mensaje"
                            name="mensaje"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.mensaje}/>
                            {formik.touched.mensaje && formik.errors.mensaje ? <div className='text-muted position-absolute mt-1 fontSizeSmall'>{formik.errors.mensaje}</div> : null}
                        </Form.Group>

                        <Button variant="primary" type="submit" className='btn btn-primary text-white mt-3 mb-2'>
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