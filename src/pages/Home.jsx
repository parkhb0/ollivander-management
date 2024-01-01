import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import style from "../styles/Home.module.css";

export default function Home() {
  const [farmList, setFarmList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [farmType, setFarmType] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("/data/farmList.json")
      .then((res) => res.json())
      .then((data) => {
        setFarmList(data);
        setFarmType(data);
        setLoading(false);
      });
  }, []);

  const isFarmType = Array.from(
    new Set(farmType.map((a) => JSON.stringify(a["farm_type"]))),
    (json) => JSON.parse(json)
  );

  const isFarmName = Array.from(
    new Set(farmType.map((a) => JSON.stringify(a["farm_name"]))),
    (json) => JSON.parse(json)
  );

  const handleFarmTypeFilter = (e) => {
    const _type = e.target.value;
    // const _farmList = [...farmList];
    const result = farmType.filter((type) => type["farm_type"] === _type);
    console.log(result);
    setFarmList(result);
  };

  const handleChangeSelect = (e) => {
    console.log(e.target.value);
    const _name = e.target.value;
    if (_name != "all") {
      const result = farmType.filter((type) => type["farm_name"] === _name);
      console.log(result);
      setFarmList(result);
    } else {
      setFarmList(farmType);
    }
  };

  console.log("farmType =", farmType);

  return (
    <div className={style.product}>
      <div className={style.selectWrap}>
        <select className={style.select} onChange={handleChangeSelect}>
          <option value="all">전체</option>
          {isFarmName &&
            isFarmName.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
        </select>
      </div>
      <div style={{ width: "100%", overflowX: "scroll" }}>
        <div className={style.filterWrap}>
          {farmType &&
            isFarmType.map((type, index) => (
              <button key={index} value={type} onClick={handleFarmTypeFilter}>
                {type}
              </button>
            ))}
        </div>
      </div>
      <ProductList farmList={farmList} />
    </div>
  );
}
