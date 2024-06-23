import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <div className="top">
      <div className="container">
        <div className="wrapper">
          <h2 className="top__title">Filter By:</h2>
          <select
            onChange={(e) => console.log(e.target.value)}
            id="sort_by_price"
          >
            <option className="default_option" default value="0">
              Sort By Price
            </option>
            <option value="price">Low to High</option>
            <option value="-price">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Top;
