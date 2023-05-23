import { createContext, useState, useEffect } from "react";

export const productContext = createContext();
export const categoryContext = createContext();
export const checkProdContext = createContext();
export const searchContext = createContext();

export default function ContextProvider({ children }) {
  const [showCategory, setCategory] = useState([]);
  const [showProduct, setProduct] = useState([]);
  const [checkProduct, setCheckProduct] = useState("All");
  const [searchItem, setSearchItem] = useState("");

  const getData = async () => {
    const resolve = await fetch("/api/categories");
    const resolvedData = await resolve.json();
    console.log(resolvedData);
    setCategory(resolvedData.categories);
  };

  const getProductData = async () => {
    const resolveProduct = await fetch("/api/products");
    const resolvedProduct = await resolveProduct.json();
    setProduct(resolvedProduct.products);
  };
  useEffect(() => {
    getData();
    getProductData();
  }, []);

  console.log(searchItem);
  return (
    <>
      <categoryContext.Provider value={{ showCategory, setCategory }}>
        <productContext.Provider value={{ showProduct, setProduct }}>
          <searchContext.Provider value={{ searchItem, setSearchItem }}>
            <checkProdContext.Provider
              value={{ checkProduct, setCheckProduct }}
            >
              {children}
            </checkProdContext.Provider>
          </searchContext.Provider>
        </productContext.Provider>
      </categoryContext.Provider>
    </>
  );
}
