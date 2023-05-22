import {createContext, useState} from "react";

export const productContext = createContext();

export default function ContextProvider({children}){
    const [showProduct, setProduct] = useState([]);
    return(
        <>
        <productContext.Provider value={{showProduct, setProduct}}>
            {children}
        </productContext.Provider>
        </>
    )
}