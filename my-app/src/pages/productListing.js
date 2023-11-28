import { productContext, checkProdContext } from "../contexts/contextProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const { showProduct, setProduct } = useContext(productContext);
  const { checkProduct } = useContext(checkProdContext);
  let [copyProduct, setCopyProduct] = useState([]);
  let [storeItem, setStoreItem] = useState({});
  const [slider, setSlider] = useState(1);
  const [sorting, setSorting] = useState(null);

  //   const getData = async () => {
  //     try {
  //       const resolve = await fetch("/api/products");
  //       const resolvedData = await resolve.json();
  //       setProduct(resolvedData.products);
  //       setCopyProduct(resolvedData.products);
  //     } catch (error) {
  //       console.error(error); // { consoles: false, }
  //     }
  //   };
  useEffect(() => {
    setCopyProduct([...showProduct]);
    // getData();
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
  console.log(checkProduct);
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
          ({ _id, image, name, specification, price, rating, categoryName }) =>
            checkProduct === "All" ? (
              <li
                key={_id}
                style={{
                  border: "1px solid black",
                  width: "35%",
                  margin: "0.5%",
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                }}
              >
                <p>
                  <img src={image} alt={name} style={{ width: "95%" }} />
                </p>
                <p>{name}</p>
                <p>Price : INR {price}</p>
                <p>Rating :{rating}</p>
                <button style={{ width: "20%", alignSelf: "center" }}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/pages/singleProductListing/${_id}`}
                  >
                    More...
                  </Link>
                </button>
                <div style={{ alignSelf: "center" }}>
                  <button>Add to cart</button>
                  <button>Add to wishList</button>
                </div>
              </li>
            ) : checkProduct === categoryName ? (
              <li
                key={_id}
                style={{
                  border: "1px solid black",
                  width: "35%",
                  margin: "0.5%",
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                }}
              >
                <p>
                  <img src={image} alt={name} style={{ width: "95%" }} />
                </p>
                <p>{name}</p>
                <p>Price : INR {price}</p>
                <p>Rating :{rating}</p>
                <button style={{ width: "20%", alignSelf: "center" }}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/pages/singleProductListing/${_id}`}
                  >
                    More...
                  </Link>
                </button>
                <div style={{ alignSelf: "center" }}>
                  <button>Add to cart</button>
                  <button>Add to wishList</button>
                </div>
              </li>
            ) : (
              " "
            )
        )}
      </ul>
    </>
  );
}
