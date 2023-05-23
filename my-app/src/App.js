import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route, Link, NavLink } from "react-router-dom";
// import { searchContext } from "./contexts/contextProvider";
import { useContext, useState } from "react";

import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import CheckoutPage from "./pages/checkout";
import LoginPage from "./pages/login";
import ProductPage from "./pages/productListing";
import SignupPage from "./pages/signup";
import SingleProductPage from "./pages/singleProductListing";
import WishlistPage from "./pages/wishlist";
import SearchPage from "./pages/searchPage";

function App() {
  // const { searchItem, setSearchItem } = useContext(searchContext);
  const [storeSearch, setStoreSearch] = useState("");
  return (
    <div className="App">
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <NavLink
          to="/pages/home"
          style={{
            alignSelf: "flex-start",
            fontSize: "20px",
            color: "red",
            backgroundColor: "lightblue",
            textDecoration: "none",
            borderRadius: "15%",
            padding: "5px",
          }}
        >
          gameXlab
        </NavLink>
        <p>
          <input
            placeholder="Search"
            onChange={(event) => {
              setStoreSearch(event.target.value);
            }}
            style={{ alignSelf: "center" }}
          />
          <Link
            onClick={() => {
              // setSearchItem(storeSearch);
            }}
            to="/pages/searchPage"
          >
            search
          </Link>{" "}
        </p>
        <div style={{ alignSelf: "flex-end" }}>
          <NavLink to="/pages/cart">Cart</NavLink>
          <NavLink to="/pages/wishlist">Wishlist</NavLink>
          <NavLink to="/pages/login">Login</NavLink>
          <NavLink to="/pages/productListing">Products</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/home" element={<HomePage />} />
        <Route path="/pages/searchPage" element={<SearchPage />} />
        <Route path="/pages/cart" element={<CartPage />} />
        <Route path="/pages/checkout" element={<CheckoutPage />} />
        <Route path="/pages/login" element={<LoginPage />} />
        <Route path="/pages/productListing" element={<ProductPage />} />
        <Route path="/pages/signup" element={<SignupPage />} />
        <Route
          path="/pages/singleProductListing/:id"
          element={<SingleProductPage />}
        />
        <Route path="/pages/wishlist" element={<WishlistPage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
