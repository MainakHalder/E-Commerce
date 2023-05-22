import { productContext } from "../contexts/contextProvider";
import {useContext, useEffect, useState, useReducer} from "react";


export default function ProductPage(){
    const {showProduct, setProduct} = useContext(productContext);
    const [copyProduct, setCopyProduct] = useState([]);
    const getData = async() => {
        try {
        const resolve = await fetch("/api/products");
        const resolvedData = await resolve.json();
        setProduct(resolvedData.products);
        setCopyProduct(resolvedData.products);  
        } catch(error){
            console.error(error);
        }
    }
    useEffect(() => {getData()}, []);
    const filterReducer = (state,action) =>{
        switch(action.type){
            case "lowTohigh":
                return setCopyProduct([...copyProduct].sort((a,b) => a.price - b.price));
                case "highTolow":
                    return setCopyProduct([...copyProduct].sort((a,b) => b.price - a.price));
                case "accessories":    
                return setCopyProduct([...copyProduct].filter(({categoryName}) => categoryName === action.payload));
                case "CD-games":    
                return setCopyProduct([...copyProduct].filter(({categoryName}) => categoryName === action.payload));
                case "consoles":    
                return setCopyProduct([...copyProduct].filter(({categoryName}) => categoryName === action.payload));
                case "laptop-pc":    
                return setCopyProduct([...copyProduct].filter(({categoryName}) => categoryName === action.payload));
                case "rating":
                return setCopyProduct([...copyProduct].filter(({rating})=> rating >= action.payload ));
                case "reset":
                return setCopyProduct(showProduct);            
                default :
                return state;
        }
    }
    const [state, dispatch] = useReducer(filterReducer, copyProduct);
    return(
        <>
        <h2 style={{display: "flex"}}>Filters: </h2>
        <div>
           <p>Sort by price :
            <label><input type = "radio" name="pricefilter" onClick={() => {dispatch({type : "lowTohigh"})}}/>Low to High</label> 
            <label><input type = "radio" onClick={() => {dispatch({type : "highTolow"})}} name="pricefilter"/>High to Low</label> 
            </p>
            <p>Filter By Category:
                <label><input type="checkbox" onClick={() => {dispatch({type: "accessories", payload : "accessories"})}}/>Accessories</label>
                <label><input type="checkbox" onClick={() => {dispatch({type: "CD-games", payload : "CD-games"})}}/>CD-games</label>
                <label><input type="checkbox" onClick={() => {dispatch({type: "consoles", payload : "consoles"})}}/>Consoles</label>
                <label><input type="checkbox" onClick={() => {dispatch({type: "laptop-pc", payload : "laptop-pc"})}}/> Gaming Pc</label>
                </p> 
                <p>Filter by rating: <label>1<input type="range" min="1" max="10" onChange={(event) => {dispatch({type: "rating", payload : event.target.value})}}/>10</label></p>
                <button onClick={() => {dispatch({type: "reset"})}}>Reset</button>
        </div>
        <h2 style={{display: "flex"}}>Products: </h2>
        <ul style ={{listStyle : "none", display : "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
            {
                copyProduct.map(({_id,image,name,specification,price,rating,categoryName}) =>
                <li key ={_id} style={{border: "1px solid black", width: "260px", margin: "0.5%"}}>
                    <p><img src ={image} alt={name}/></p>
                    <p>{name}</p>
                    <p>Price : INR {price}</p>
                    <p>Rating :{rating}</p>
                </li>
                )
            }
        </ul>
        </>
    )
}