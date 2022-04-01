import React from 'react';

//NavBar Bootstrap

import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

//iconos

import iconoManga from "../../assets/img/icons/iconoManga.svg";
import iconoComic from "../../assets/img/icons/iconoComic.svg";
import iconoDescuento from "../../assets/img/icons/descuento.svg";
import iconoTelefono from "../../assets/img/icons/telefono.svg";

//Imagenes

import logoAkira from "../../assets/img/logoAkira.png";
import OnePiece from "../../assets/img/categorias/mangas/onepiece.png";
import Naruto from "../../assets/img/categorias/mangas/naruto.png";
import AttackOnTitan from "../../assets/img/categorias/mangas/attackontitan.png";
import DeathNote from "../../assets/img/categorias/mangas/deathnote.png";
import Another from "../../assets/img/categorias/mangas/another.png";

import Batman from "../../assets/img/categorias/comics/batman.png";
import Superman from "../../assets/img/categorias/comics/superman.png";
import Lobezno from "../../assets/img/categorias/comics/wolverine.png";
import HarryPotter from "../../assets/img/categorias/comics/harryPotter.png";
import Spiderman from "../../assets/img/categorias/comics/Spiderman.png";

import CartWidget from "./CartWidget";

const NavBar = () => {
    return(

        <header>

            <div className='tiraNavbar w-100' />


            <Navbar collapseOnSelect expand="lg">
            <Container className='d-flex'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <div className='col-5'>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="d-flex justify-content-evenly w-100">
                    <div className='d-flex align-items-center'>
                    <img src={iconoManga} width="40" alt='Icono' />
                        <NavDropdown className='titulos' to="/mangas" title="Mangas" id="collasible-nav-dropdown">
                            <NavDropdown.Item><NavLink to="/mangas/onepiece"><img className='my-2' width="100" src={OnePiece} alt="categoria" /></NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/mangas/naruto"><img className='my-2' width="100" src={Naruto} alt="categoria" /></NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/mangas/attackontitan"><img className='my-2' width="100" src={AttackOnTitan} alt="categoria" /></NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/mangas/deathnote"><img className='my-2' width="100" src={DeathNote} alt="categoria" /></NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/mangas/another"><img className='my-2' width="100" src={Another} alt="categoria" /></NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><NavLink to="/mangas" className="nav-link text-dark">Otros Mangas</NavLink></NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    <div className='d-flex align-items-center'>
                    <img src={iconoComic} width="40" alt='Icono' />
                        <NavDropdown className='titulos' to="/comics" title="Comics" id="collasible-nav-dropdown">
                            <NavDropdown.Item><NavLink to="/comics/batman"><img className='my-2' width="60" src={Batman} alt="categoria" /></NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/comics/superman"><img className='my-2' width="60" src={Superman} alt="categoria" /></NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/comics/wolverine"><img className='my-2' width="100" src={Lobezno} alt="categoria" /></NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/comics/harrypotter"><img className='my-2' width="100" src={HarryPotter} alt="categoria" /></NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/comics/spiderman"><img className='my-2' width="100" src={Spiderman} alt="categoria" /></NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><NavLink to="/comics" className="nav-link text-dark">Otros Comics</NavLink></NavDropdown.Item>
                        </NavDropdown>  
                    </div>
                    </Nav>
                </Navbar.Collapse>
            </div>

            {/*----logotipo----*/}

            <NavLink className="navbar-brand logotipoPosicion d-flex justify-content-center col-2" to="/"><img width="120" height="120" src={logoAkira} alt="logotipo" /></NavLink>
            
            {/*----parte derecha----*/}

            <div className='col-5'>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="d-flex justify-content-evenly w-100">
                    <div className='d-flex align-items-center'>
                    <img src={iconoTelefono} width="40" alt='Icono' />
                        <Nav.Link className='titulos' href="/contacto">Contacto</Nav.Link>
                    </div>

                    {/*----carrito----*/}

                    <CartWidget />

                    </Nav>
                </Navbar.Collapse>
            </div>

            </Container>
            </Navbar>

            
            <hr className='mb-0'/> 

    </header>

    );
}

export default NavBar;