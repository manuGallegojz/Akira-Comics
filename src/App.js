import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//Paginas

import NavBar from "./components/header/navBar";
import Home from './components/Home/Home';
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
            <Route path="/mangas" element={<Tienda tipo="Manga"/>}/>
            <Route path="/figuras" element={<Tienda tipo="Figuras"/>}/>
            <Route path="/comics" element={<Tienda tipo="Comic"/>}/>
            <Route path="/mangas/onepiece" element={<Tienda filtro="One Piece"/>}/>
            <Route path="/mangas/naruto" element={<Tienda filtro="Naruto"/>}/>
            <Route path="/mangas/attackontitan" element={<Tienda filtro="Attack on Titan"/>}/>
            <Route path="/mangas/deathnote" element={<Tienda filtro="Death Note"/>}/>
            <Route path="/mangas/another" element={<Tienda filtro="Another"/>}/>

            <Route path="/comics/batman" element={<Tienda filtro="Batman"/>}/>
            <Route path="/comics/superman" element={<Tienda filtro="Superman"/>}/>
            <Route path="/comics/wolverine" element={<Tienda filtro="Wolverine"/>}/>
            <Route path="/comics/harrypotter" element={<Tienda filtro="Harry Potter"/>}/>
            <Route path="/comics/spiderman" element={<Tienda filtro="Spiderman"/>}/>

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

