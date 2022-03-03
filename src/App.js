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
            <Route path="/Akira-Comics" element={<Home/>}/>
            <Route path="/Akira-Comics/mangas" element={<Tienda tipo="Manga"/>}/>
            <Route path="/Akira-Comics/figuras" element={<Tienda tipo="Figuras"/>}/>
            <Route path="/Akira-Comics/comics" element={<Tienda tipo="Comic"/>}/>
            <Route path="/Akira-Comics/mangas/onepiece" element={<Tienda filtro="One Piece"/>}/>
            <Route path="/Akira-Comics/mangas/naruto" element={<Tienda filtro="Naruto"/>}/>
            <Route path="/Akira-Comics/mangas/attackontitan" element={<Tienda filtro="Attack on Titan"/>}/>
            <Route path="/Akira-Comics/mangas/deathnote" element={<Tienda filtro="Death Note"/>}/>
            <Route path="/Akira-Comics/mangas/another" element={<Tienda filtro="Another"/>}/>

            <Route path="/Akira-Comics/comics/batman" element={<Tienda filtro="Batman"/>}/>
            <Route path="/Akira-Comics/comics/superman" element={<Tienda filtro="Superman"/>}/>
            <Route path="/Akira-Comics/comics/wolverine" element={<Tienda filtro="Wolverine"/>}/>
            <Route path="/Akira-Comics/comics/harrypotter" element={<Tienda filtro="Harry Potter"/>}/>
            <Route path="/Akira-Comics/comics/spiderman" element={<Tienda filtro="Spiderman"/>}/>

            <Route path="/Akira-Comics/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/Akira-Comics/carrito" element={<Carrito />}/>

        </Routes>
      <Footer/>
      </BrowserRouter>

    </ContextoCarritoProductos>
      </>
}

export default App;

