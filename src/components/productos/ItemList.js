import React, { useEffect, useState } from 'react';

import Item from './Item';

//imagenesProductos

import comic1 from '../../assets/img/productos/comic1.jpg';
import comic2 from '../../assets/img/productos/comic2.jpg';
import comic3 from '../../assets/img/productos/comic3.jpg';
import comic4 from '../../assets/img/productos/comic4.jpg';
import comic5 from '../../assets/img/productos/comic5.jpg';
import comic6 from '../../assets/img/productos/comic6.jpg';
import comic7 from '../../assets/img/productos/comic7.jpg';
import comic8 from '../../assets/img/productos/comic8.jpg';

export default function ItemList(){

    const [usuarios ,setUsuarios] = useState([]);

    let listaProductos = [
        {
            id: 1,
        imagen: comic1,
        titulo: "Al otro lado del Instituto",
        precio:"$645.00",
        stock:"0"},
        {
            id: 2,
        imagen: comic2,
        titulo: "Halo, la Novela Gráfica",
        precio:"$1450.00",
        stock:"7"
        },
        {
            id: 3,
        imagen: comic3,
        titulo: "Destinos Infinitos",
        precio:"$1800.00",
        stock:"3"
        },
        {
            id: 4,
        imagen: comic4,
        titulo: "El Asombroso Spiderman 03",
        precio:"$645.00",
        stock:"4"
        },
        {
            id: 5,
        imagen: comic5,
        titulo: "One Piece 01",
        precio:"$615.00",
        stock:"6"
        },
        {
            id: 6,
        imagen: comic6,
        titulo: "Death Note",
        precio:"$579.00",
        stock:"2"
        },
        {
            id: 7,
        imagen: comic7,
        titulo: "Ataque a los Titanes 01",
        precio:"$549.00",
        stock:"9"
        },
        {
            id: 8,
        imagen: comic8,
        titulo: "Another 01",
        precio:"$549.00",
        stock:"7"
        }
    ]

    useEffect(()=>{

        const task = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(listaProductos);
            }, 2000);
        })
        task.then(resultado => {
            setUsuarios(resultado);
        });

    }, [listaProductos])

    return <React.Fragment>

    {
        usuarios.length === 0 ?
        <>
            <div className='w-100 d-flex justify-content-center'>
                <div className="loading show">
                    <div className="spin"></div>
                </div>
            </div>
        </>
        :

        usuarios.map((e)=>{
            return(

                <Item id={e.id} imagen={e.imagen} titulo ={e.titulo} precio={e.precio} stock={e.stock} />
                
            )
        })
    }


        </React.Fragment>;

}