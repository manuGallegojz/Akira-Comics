import React, { useContext } from 'react';

export const ProductsContext = React.createContext();

export const useProductsContext = () => useContext(ProductsContext); 

export const ContextoProductos = ({children}) => {

    //ItemDetails

    const item = [];

    const onAdd = (producto, contador, contadorCarrito, agregarProductos) => {

        let id = parseInt(producto.id); 

        item.push({
            imagen: producto.imagen,
            precio: producto.precio,
            titulo: producto.titulo,
            descripcion: producto.descripcion,
            cantidad: {contadorCarrito},
            id: id
        });

        agregarProductos(item, contador, id);

    }

    return(
        <ProductsContext.Provider value={{onAdd}}>
            {children}
        </ProductsContext.Provider>
    )

}