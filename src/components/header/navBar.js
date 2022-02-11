import React from 'react';

import CartWidget from "./CartWidget";

const NavBar = ({children}) => {

    return(

        <header>

        <nav class="navbar navbar-expand-lg px-5">
            <a class="navbar-brand" href="./#"><img width="100" height="100" src="../logo-02.png" alt="logotipo" /></a>
            <form class="d-flex">
                <input class="form-control me-2" type="text" placeholder="Buscar" />
                <button class="btn btn-primary" type="button">Buscar</button>
            </form>
            
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <a class="nav-link" href="./#">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="./#">Mangas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="./#">Figuras</a>
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