import React from 'react';

//NavBar Bootstrap

import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

            <Navbar collapseOnSelect expand="lg">
            <Container>
            <NavLink className="navbar-brand" to="/"><img width="100" height="100" src={logoAkira} alt="logotipo" /></NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavLink to="/" className="nav-link text-dark titulos">Inicio</NavLink> 
                {/*<NavLink to="/mangas" className="nav-link text-dark" activeClassName="nav-link text-danger">Mangas</NavLink>*/}
                <NavDropdown className='titulos' to="/mangas" title="Mangas" id="collasible-nav-dropdown">
                    <NavDropdown.Item><NavLink to="/mangas/onepiece"><img className='my-2' width="100" src={OnePiece} alt="categoria" /></NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to="/mangas/naruto"><img className='my-2' width="100" src={Naruto} alt="categoria" /></NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to="/mangas/attackontitan"><img className='my-2' width="100" src={AttackOnTitan} alt="categoria" /></NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to="/mangas/deathnote"><img className='my-2' width="100" src={DeathNote} alt="categoria" /></NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to="/mangas/another"><img className='my-2' width="100" src={Another} alt="categoria" /></NavLink></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><NavLink to="/mangas" className="nav-link text-dark">Otros Mangas</NavLink></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className='titulos' to="/" title="Comics" id="collasible-nav-dropdown">
                    <NavDropdown.Item><NavLink to="/comics/batman"><img className='my-2' width="60" src={Batman} alt="categoria" /></NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to="/comics/superman"><img className='my-2' width="60" src={Superman} alt="categoria" /></NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to="/comics/wolverine"><img className='my-2' width="100" src={Lobezno} alt="categoria" /></NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to="/comics/harrypotter"><img className='my-2' width="100" src={HarryPotter} alt="categoria" /></NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to="/comics/spiderman"><img className='my-2' width="100" src={Spiderman} alt="categoria" /></NavLink></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><NavLink to="/comics" className="nav-link text-dark">Otros Comics</NavLink></NavDropdown.Item>
                </NavDropdown>  
                </Nav>
                <CartWidget />
            </Navbar.Collapse>
            </Container>
            </Navbar>

    </header>

    );
}

export default NavBar;