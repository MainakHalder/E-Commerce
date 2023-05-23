import { useContext } from "react";
import { categoryContext, checkProdContext } from "../contexts/contextProvider";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { showCategory } = useContext(categoryContext);
  const { setCheckProduct } = useContext(checkProdContext);
  return (
    <>
      <h1>Welcome to gameXlab</h1>
      <h3>Love your game more with out newest edition to stock</h3>
      <p>
        Take your gaming experience to a whole new level with our latest gaming
        Pc's, gears and consoles
      </p>
      <Link
        to="/pages/productListing"
        style={{ textDecoration: "none", fontWeight: "bolder" }}
      >
        Get Started
      </Link>
      <h3>Recommended:</h3>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {showCategory.map(({ _id, categoryName, description }) => (
          <li key={_id}>
            <h3>{categoryName}</h3>
            <p>{description}</p>
            <Link
              onClick={() => {
                setCheckProduct(categoryName);
              }}
              to="/pages/productListing"
              style={{ textDecoration: "none" }}
            >
              Explore
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
