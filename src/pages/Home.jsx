import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import style from "../styles/Home.module.css";

export default function Home() {
  const [farmList, setFarmList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/data/farmList.json")
      .then((res) => res.json())
      .then((data) => {
        setFarmList(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className={style.product}>
      <ProductList farmList={farmList} />
    </div>
  );
}
