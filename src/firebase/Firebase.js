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

    const filtros = (filtro)=>{

        if(filtro === 1){
            productosHook.sort((a, b) => {
                let fa = a.titulo,
                    fb = b.titulo;
            
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            })
        }else if(filtro === 2){

        } else if(filtro === 3){

        }

    }

    return(
        <FirebaseContext.Provider value={{productosHook, filtros}}>
            {children}
        </FirebaseContext.Provider>
    )
}