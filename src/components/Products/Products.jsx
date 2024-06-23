import React, { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
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
    <section className="products">
      <div className="products_wrapper">
        {products.map((product) => (
          <div className="product_card" key={product.id}>
            <img
              className="product_img"
              src="/src/assets/images/img.svg"
              alt={product.title}
            />
            <h3 className="product_title">{product.name}</h3>
            <p className="product_description">{product.description}</p>
            <div className="colors">
              {product.color.map((color, index) => (
                <div
                  className="filter_color_option"
                  key={index}
                  style={{
                    backgroundColor: `rgb(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]})`,
                  }}
                ></div>
              ))}
            </div>
            <p className="product_price">{product.price} $</p>
            <button className="product_btn">Add to cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;