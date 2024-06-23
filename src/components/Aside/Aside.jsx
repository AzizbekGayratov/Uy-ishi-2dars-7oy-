import React, { useEffect, useState } from "react";
import "./Aside.css";

const Aside = () => {
  const [brand, setBrand] = useState([]);
  const [color, setColor] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/brands");
        const data = await response.json();
        const response2 = await fetch("http://localhost:3000/colors");
        const data2 = await response2.json();
        setBrand(data);
        setColor(data2);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <aside className="aside">
      <div className="aside__wrapper">
        <ul className="filter_list">
          <li className="filter_box">
            <h3 className="filter__title">Brand</h3>
            <ul className="filter_brand_list">
              {brand.map((brand, index) => (
                <li key={index} className="filter_option_item">
                  <p className="brand_text">{brand}</p>
                </li>
              ))}
            </ul>
          </li>
          <li className="filter_box">
            <h3 className="filter__title">Color</h3>
            <ul className="filter_option_list">
              {color.map((color, index) => (
                <li
                  key={index}
                  className="filter_color_option"
                  style={{ background: color }}
                ></li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
