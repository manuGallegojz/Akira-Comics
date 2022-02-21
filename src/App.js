import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Header

import NavBar from "./components/header/NavBar";
import Header from "./components/header/Header";

//Productos

import ItemListContainer from "./components/productos/ItemListContainer";

//Footer

import Footer from "./components/footer/footer";

function App () {
  
    return <>

        <NavBar>

          <Header/>

        </NavBar>

        <ItemListContainer />

        <Footer/>

      </>
}

export default App;

