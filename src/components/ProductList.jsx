import React from "react";
import style from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

export default function ProductList({ farmList }) {
  console.log("farmList = ", farmList);

  return (
    <div className={style.product_list}>
      {farmList &&
        farmList.map((farm) => <ProductCard key={farm.farm_id} farm={farm} />)}
    </div>
  );
}
