import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { ContextoProductos } from './ProductsContext';
import { collection, getDocs } from 'firebase/firestore';
import db from '../utils/firebase';

export const CartContext = React.createContext(); 

export const useCartContext = () => useContext(CartContext);

export const ContextoCarritoProductos = ({children}) => {

    //Los estados para agregar tanto los productos que luego van al carrito y el contador de cuantos agrego

    const [productosCarrito, setProductosCarrito] = useState([]);

    const [productosHook, setProductosHook] = useState([]);

    const [contadorCarrito, setContadorCarrito] = useState(0);

    let productosIdCarrito = [];

    let totalCarrito = productosCarrito.reduce((acc,i) => (acc + (parseFloat(i[0].precio.slice(1)) * i[1])), 0);

    console.log(productosCarrito[0])

    productosCarrito.map(e => productosIdCarrito.push(e[2]))

    //Función para finalizar compra

    

    let orden = {
        buyer: {
            nombre: "",
            telefono: "",
            correo: ""
        },
        items: productosCarrito,
        total: totalCarrito
    }

    //Arreglo con los productos de la página

    useEffect(()=>{
        const getData = async() => {
            try{
                const getProducts = collection(db, "productos")
                const col = await getDocs(getProducts)
                const result = col.docs.map((doc, index) => {return {id:index, ...doc.data()}})
                setProductosHook(result)
            } catch (err) {
                console.warn("error", err)
            }
        }
        getData()
    },[])

    //Para agregar los productos y también sumar la cantidad total de productos que hay

    const agregarProductos = (producto, cantidad, id)=>{

        setProductosCarrito([...productosCarrito, [...producto, cantidad, id]]);
        setContadorCarrito((actual) => actual + cantidad)

    }

    const quitarProductos = (producto, cantidad)=>{

        setContadorCarrito((actual) => actual - cantidad)

        const filtroProductos = productosCarrito.filter((e) => e[0] !== producto);

        setProductosCarrito(filtroProductos);

    }

    const limpiarProductos = ()=>{
        setProductosCarrito([]);
        setContadorCarrito(0);

    }

    return(<>

        <ThemeContext.Provider value={productosHook}>
            <CartContext.Provider value={{contadorCarrito, productosCarrito, productosIdCarrito, agregarProductos, limpiarProductos, quitarProductos, totalCarrito}}>
                <ContextoProductos>
                {children}
                </ContextoProductos>
            </CartContext.Provider>
        </ThemeContext.Provider>

        </>)

}