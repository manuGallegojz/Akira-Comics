import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//Paginas

import NavBar from "./components/header/navBar";
import Home from './components/Home/Home';
import Contacto from './components/Pages/Contacto';
import Tienda from './components/Pages/Tienda';
import ItemDetailContainer from './components/productos/details/ItemDetailContainer';
import Carrito from './components/carrito/Carrito';
import CheckOut from './components/carrito/CheckOut';

//Footer

import Footer from "./components/footer/footer";

//Context

import { ContextoCarritoProductos } from './context/CartContext';

function App () {
  
    return <>

    <ContextoCarritoProductos>

      <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contacto" element={<Contacto />}/>

            <Route path="/:tipoComic" element={<Tienda/>}/>

            <Route path="/mangas/:idCategoria" element={<Tienda />}/>
            <Route path="/comics/:idCategoria" element={<Tienda />}/>

            <Route path="/ofertas" element={<Tienda filtro="ofertas"/>}/>

            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<CheckOut />}/>

        </Routes>
      <Footer/>
      </BrowserRouter>

    </ContextoCarritoProductos>

    </>
}

export default App;

