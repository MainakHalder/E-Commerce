import { useParams } from "react-router-dom";
import { useContext } from "react";
import { productContext } from "../contexts/contextProvider";

export default function SingleProductPage() {
  const { showProduct } = useContext(productContext);
  const singleItem = useParams();
  console.log(showProduct, singleItem);
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {showProduct.map(
          ({ _id, image, name, specification, price, rating, categoryName }) =>
            _id === singleItem.id ? (
              <li style={{ display: "flex", flexDirection: "column" }}>
                <p>
                  <img src={image} alt={name} style={{ width: "50%" }} />
                  <div style={{ alignSelf: "center" }}>
                    <button>Add to cart</button>
                    <button>Add to wishList</button>
                  </div>
                </p>
                <div style={{ alignSelf: "center" }}>
                  <tr>
                    <th>Name</th>
                    <th>Specification</th>
                    <th>Rating</th>
                  </tr>
                  <tr>
                    <td style={{ border: "1px solid black" }}>{name}</td>
                    <td style={{ border: "1px solid black" }}>
                      {specification}
                    </td>
                    <td style={{ border: "1px solid black" }}>{rating}</td>
                  </tr>
                </div>
              </li>
            ) : (
              ""
            )
        )}
      </ul>
    </>
  );
}
