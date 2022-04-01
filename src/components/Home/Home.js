import React from 'react';

//Header

import Header from "../header/Header";

//Productos

import ItemListContainer from "../productos/ItemListContainer";

export default function Home () {

    return <>

        <Header/>

        <div className='container'>

          <ItemListContainer filtroMuestra="stock" cantidad={4}/>

        </div>

      </>
}
