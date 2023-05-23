import { searchContext } from "../contexts/contextProvider";
import { useContext, productContext } from "react";

export default function SearchPage() {
  const { searchItem } = useContext(searchContext);
  const { showProduct } = useContext(productContext);
  const searchedItem = showProduct.filter(({ name }) =>
    searchItem.toLowerCase().includes(name.toLowerCase())
  );
  console.log(searchItem, showProduct, searchedItem);
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {searchedItem.map(
          ({
            _id,
            image,
            name,
            specification,
            price,
            rating,
            categoryName,
          }) => (
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
                  <td style={{ border: "1px solid black" }}>{specification}</td>
                  <td style={{ border: "1px solid black" }}>{rating}</td>
                </tr>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
}
