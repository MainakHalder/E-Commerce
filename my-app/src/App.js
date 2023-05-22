import "./App.css";
import Mockman from "mockman-js";
import {Routes,Route,Link,NavLink} from "react-router-dom";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import CheckoutPage from "./pages/checkout";
import LoginPage from "./pages/login";
import ProductPage from "./pages/productListing";
import SignupPage from "./pages/signup";
import SingleProductPage from "./pages/singleProductListing";
import WishlistPage from "./pages/wishlist";

function App() {
  return (
    <div className="App">
      <h1>Neog project</h1>
      <nav>
        <NavLink to="/pages/home">Home</NavLink>
        <NavLink to="/pages/cart">Cart</NavLink>
        <NavLink to="/pages/wishlist">Wishlist</NavLink>
        <NavLink to="/pages/login">Login</NavLink>
        <NavLink to="/pages/productListing">Products</NavLink>
      </nav>

      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/pages/home" element = {<HomePage/>} />
        <Route path="/pages/cart" element = {<CartPage/>} />
        <Route path="/pages/checkout" element = {<CheckoutPage/>} />
        <Route path="/pages/login" element = {<LoginPage/>} />
        <Route path="/pages/productListing" element = {<ProductPage/>} />
        <Route path="/pages/signup" element = {<SignupPage/>} />
        <Route path="/pages/singleProductListing" element = {<SingleProductPage/>} />
        <Route path="/pages/wishlist" element = {<WishlistPage/>} />
        <Route path="/mockman" element={<Mockman/>} />
      </Routes>
    </div>
  );
}

export default App;
