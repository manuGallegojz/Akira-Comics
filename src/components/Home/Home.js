import React from 'react';
import Filtros from "../filtros/Filtros";

//Header

import Header from "../header/Header";

//Productos

import ItemListContainer from "../productos/ItemListContainer";

export default function Home () {

    return <>

        <Header/>

        <Filtros />

        <div className='container'>
            
          {/* <h1>Recientes</h1> */}

          <ItemListContainer filtroMuestra="stock" cantidad={4}/>

          {/* {
          listaProductos.map((e)=>{
            return (
              <div key={e.id} className='container mt-5'>
                  {
  
                  }
              </div>
          )
          
          }) */
        
        }

          {/* <h1>Populares</h1> */}

          {/* <ItemListContainer filtroMuestra="popularidad" cantidad={4}/> */}

          {/* <h1>Editoriales y Marcas</h1> */}

        </div>

      </>
}
