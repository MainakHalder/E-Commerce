import { productContext } from "../contexts/contextProvider";
import { useContext, useEffect, useState } from "react";

export default function ProductPage() {
  const { showProduct, setProduct } = useContext(productContext);
  let [copyProduct, setCopyProduct] = useState([]);
  let [storeItem, setStoreItem] = useState({});
  const [slider, setSlider] = useState(1);
  const [sorting, setSorting] = useState(null);

  const getData = async () => {
    try {
      const resolve = await fetch("/api/products");
      const resolvedData = await resolve.json();
      setProduct(resolvedData.products);
      setCopyProduct(resolvedData.products);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filteredProducts = showProduct.filter(
      (item) =>
        (Object.values(storeItem).every((el) => !el) ||
          storeItem[item.categoryName]) &&
        item.rating >= slider
    );
    if (sorting === "asc") filteredProducts.sort((a, b) => a.price - b.price);

    if (sorting === "desc") filteredProducts.sort((a, b) => b.price - a.price);
    setCopyProduct(filteredProducts);
  }, [storeItem, sorting, slider]);

  return (
    <>
      <h2 style={{ display: "flex" }}>Filters: </h2>
      <div>
        <p>
          Sort by price:
          <label>
            <input
              type="radio"
              name="pricefilter"
              onClick={() => {
                setSorting("asc");
              }}
            />
            Low to High
          </label>
          <label>
            <input
              type="radio"
              onClick={() => {
                setSorting("desc");
              }}
              name="pricefilter"
            />
            High to Low
          </label>
        </p>
        {["accessories", "CD-games", "consoles", "laptop-pc"].map((item) => (
          <label>
            <input
              type="checkbox"
              onClick={() => {
                setStoreItem({ ...storeItem, [item]: !storeItem[item] });
              }}
            />
            {item}
          </label>
        ))}
        <p>
          Filter by rating:{" "}
          <label>
            1
            <input
              type="range"
              min="1"
              max="10"
              value={slider}
              onChange={(event) => {
                setSlider(event.target.value);
              }}
            />
            10
          </label>
        </p>
        <button onClick={() => {}}>Reset</button>
      </div>
      <h2 style={{ display: "flex" }}>Products: </h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {copyProduct?.map(
          ({
            _id,
            image,
            name,
            specification,
            price,
            rating,
            categoryName,
          }) => (
            <li
              key={_id}
              style={{
                border: "1px solid black",
                width: "260px",
                margin: "0.5%",
              }}
            >
              <p>
                <img src={image} alt={name} />
              </p>
              <p>{name}</p>
              <p>Price : INR {price}</p>
              <p>Rating :{rating}</p>
            </li>
          )
        )}
      </ul>
    </>
  );
}
