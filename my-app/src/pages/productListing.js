import { productContext } from "../contexts/contextProvider";
import {useContext} from "react";


export default function ProductPage(){
    const {showProduct, setProduct} = useContext(productContext);
    console.log(showProduct);
    return(
        <>
        <ul>
            {
                showProduct.map(({_id,image,name,specification,price,rating,categoryName}) =>
                <li key ={_id}>
                    <p><img src ={image} alt={name}/></p>
                    <p>{name}</p>
                    <p>Price : INR{price}</p>
                    <p>Rating :{rating}</p>
                </li>
                )
            }
        </ul>
        <button onClick={()=>{console.log(showProduct)}}>Show</button>
        </>
    )
}