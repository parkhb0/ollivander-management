import React, { useCallback, useEffect, useRef, useState } from "react";
import Banner from "../components/Banner/banner";
import ProductSkeleton from "../components/design/Skeleton/ProductSkeleton";
import ProductCard from "../components/ProductCard";
// import ProductList from "../components/ProductList";
import style from "../styles/Home.module.css";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [farmList, setFarmList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [farmType, setFarmType] = useState([]);
  const [ref, inView] = useInView();

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

  const productFetch = () => {
    fetch("/data/farmList.json")
      .then((res) => res.json())
      .then((data) => {
        setFarmList([...farmList, ...data]);
        setFarmType([...farmList, ...data]);
        setLoading(false);
      });
  };

  useEffect(() => {
    // inView가 true 일때만 실행한다.
    if (inView) {
      console.log(inView, "무한 스크롤 요청 🎃");
      productFetch();
    }
  }, [inView]);

  return (
    <>
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
        <Banner />
        <div style={{ width: "100%", minHeight: "600px" }}>
          {loading ? (
            <div className={style.product_list}>
              <ProductSkeleton cards={12} />
            </div>
          ) : (
            <div className={style.product_list}>
              {farmList &&
                farmList.map((farm, index) => (
                  <ProductCard key={farm.farm_id + index} farm={farm} />
                ))}
            </div>
          )}
        </div>
        <div ref={ref}>안녕</div>
      </div>
    </>
  );
}
