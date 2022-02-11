import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/header/navBar";
import ItemListContainer from "./components/header/ItemListContainer";

function App () {
  
    return (
      
      <NavBar>
        <ItemListContainer titulo="Nuevos comics de Verano"/>
      </NavBar>

    );
}

export default App;

