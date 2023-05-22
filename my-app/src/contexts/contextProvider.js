import {createContext, useState} from "react";

export const productContext = createContext();

export default function ContextProvider({children}){
    const [showProduct, setProduct] = useState([]);
    const getData = async() => {
        try {
        const resolve = await fetch("/api/products");
        const resolvedData = await resolve.json();
        setProduct(resolvedData.products);
        } catch(error){
            console.error(error);
        }
    }
    getData();
    return(
        <>
        <productContext.Provider value={{showProduct, setProduct}}>
            {children}
        </productContext.Provider>
        </>
    )
}