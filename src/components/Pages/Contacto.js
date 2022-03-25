import React from 'react'; 

//imagenes

// import iconoTelefono from "../../assets/imagenes/iconos/telefono.png";
// import iconoMapa from "../../assets/imagenes/iconos/mapa.png";
// import iconoEmail from "../../assets/imagenes/iconos/email.png";

export default function Contacto(){


    return(
        <>
            <iframe className="mb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13131.11583214668!2d-58.51084875723259!3d-34.635025782028116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9b68fab95b5%3A0xbaf48a44b765c9eb!2sVilla%20Luro%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1646788102738!5m2!1ses-419!2sar" style={{ border: 0 }} frameborder="0" width="100%" aria-hidden="false" height="450" allowFullScreen="" loading="lazy" tabindex="0" />

            <section className="container">

                <div className="row justify-content-center">

                <div className="row">

                    <div className="col-lg-6 col-12 text-center text-lg-start mb-5 mb-md-5 mb-lg-0">

                        <div className="col-12 mb-5 mb-lg-2">

                                <div className="mb-4 me-lg-4 d-lg-inline float-lg-start">

                                    {/* <img className="icono" src={iconoTelefono} alt='icono'/> */}

                                    </div>

                                    <div className="d-lg-inline-block">

                                <h4 className="serif verde">Teléfono</h4>
                                
                                    <p className="sanserif">15-1234-4321</p>
                                    <p className="sanserif">11-5678-8765</p>
                
                                </div>

                        </div>


                        <div className="col-12 mb-5 mb-lg-2">

                            <div className="mb-4 me-lg-4 d-lg-inline float-lg-start">

                                {/* <img className="icono" src={iconoMapa} alt='icono'/> */}

                                </div>

                                <div className="d-lg-inline-block">

                            <h4 className="serif rosa">Dirección</h4>
                            
                                <p className="sanserif">Villa Luro, CABA, Argentina y</p>
                                <p className="sanserif">Flores, CABA, Argentina</p>

                                </div>

                        </div>
                            

                        <div className="col-12 mb-5 mb-lg-0">

                            <div className="mb-4 me-lg-4 d-lg-inline float-lg-start">

                            {/* <img className="icono" src={iconoEmail} alt='icono'/> */}

                            </div>

                            <div className="d-lg-inline-block">

                            <h4 className="serif verde">Email</h4>

                                <p className="sanserif">akiracomics@gmail.com</p>

                            </div>

                            </div>

                </div>


                <div className="col-lg-6 col-12 sanserif">

                        <h4 className="serif verde">Mandanos un Mensaje</h4>

                    <form action="enviar.php" method="post">

                        <div className="form-group">

                            <label htmlFor="nombre">Nombre:</label>
                            <input className="form-control" type="text" name="nombre" id="nombre"/>


                            <label htmlFor="email">Email:</label>
                            <input className="form-control" type="text" name="email" id="email"/>


                            <label htmlFor="asunto">Asunto:</label>
                            <input className="form-control" type="text" name="asunto" id="asunto"/>


                            <label htmlFor="mensaje">Mensaje:</label>
                            <textarea className="form-control" name="mensaje" id="mensaje"></textarea>

                        </div>

                            <input type="submit" value="Enviar" className="btn btn-primary text-white mt-3 mb-5"/>

                    </form>

                </div>

            </div>

            </div>

            </section>
        </>
        )
    }