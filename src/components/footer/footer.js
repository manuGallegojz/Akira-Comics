import React from 'react';

import logoAkira from "../../assets/img/logoAkira.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import {NavLink} from 'react-router-dom';

export default function Footer(){

    return(

        <>
            <footer className='page-footer font-small bg-dark py-5 mt-5'>

                <div className='container'>

                    <div className='d-flex justify-content-center'>

                        <div className='col-md-12 text-center text-light'>

                            <a href='/'><img width="50" height="50" src={logoAkira} alt="logotipo" /></a>

                            <div className="d-flex mt-3 justify-content-center">
                                <NavLink className="nav-link text-white" to="/mangas">Mangas</NavLink>
                                <NavLink className="nav-link text-white" to="/figuras">Figuras</NavLink>
                                <NavLink className="nav-link text-white" to="/carrito">Carrito</NavLink>
                            </div>

                            <div className="d-flex mt-3 justify-content-center">
                                <NavLink className="mx-2 circuloContacto" to="/mangas"><span className='mostrarRedesSociales'><FontAwesomeIcon icon={faFacebookF} inverse /></span></NavLink>
                                <NavLink className="mx-2 circuloContacto" to="/mangas"><span className='mostrarRedesSociales'><FontAwesomeIcon icon={faTwitter} inverse /></span></NavLink>
                                <NavLink className="mx-2 circuloContacto" to="/mangas"><span className='mostrarRedesSociales'><FontAwesomeIcon icon={faInstagram} inverse /></span></NavLink>
                            </div>
                        
                        </div>

                    </div>

                </div>

            </footer>

            </>
        );
}