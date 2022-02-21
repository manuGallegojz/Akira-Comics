import React from 'react';

import CartWidget from "./CartWidget";

import logoAkira from "../../assets/img/logoAkira.png";

const NavBar = ({children}) => {

    return(

        <header>

        <nav className="navbar navbar-expand-lg px-5">

            <a className="navbar-brand" href="./#"><img width="100" height="100" src={logoAkira} alt="logotipo" /></a>

            <form className="d-flex">
                <input className="form-control me-2" type="text" placeholder="Buscar" />
                <button className="btn btn-primary" type="button">Buscar</button>
            </form>
            
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="./#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./#">Mangas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./#">Figuras</a>
                    </li>
                </ul>
                </div>

                <CartWidget />
            </nav>

            {children}

    </header>

    );
}

export default NavBar;