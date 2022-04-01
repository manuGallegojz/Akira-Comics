import React, { useContext, useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../utils/firebase';

export const FirebaseContext = React.createContext();

export const useFirebaseContext = () => useContext(FirebaseContext);

export const Firebase = ({children}) => {

    const [productosHook, setProductosHook] = useState([]);

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

    return(
        <FirebaseContext.Provider value={{productosHook}}>
            {children}
        </FirebaseContext.Provider>
    )
}