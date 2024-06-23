import React from "react";
import { Top, Aside, Products } from "./components/CombinedComponents.js";
import { useEffect, useState } from "react";
import Context from "./contexts/Context.js";

const initialState = {
  data: [],
  error: null,
};

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const products = await response.json();
        console.log(products);
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Context.Provider value={{ products, setProducts }}>
      <Top />
      <main className="main">
        <div className="container">
          <div className="main_wrapper">
            <Aside />
            <Products />
          </div>
        </div>
      </main>
    </Context.Provider>
  );
};

export default App;
