import React, { useCallback, useEffect, useRef, useState } from "react";
import ProductList from "../components/ProductList";
import style from "../styles/Home.module.css";

export default function Home() {
  const [farmList, setFarmList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [farmType, setFarmType] = useState([]);
  const loader = useRef(null);

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

  // const getBaljuList = useCallback(async () => {
  //   // await fetch("/data/farmList.json");
  //   // await setFarmList((prev) => [...prev, ...farmList]);
  //   await fetch("/data/farmList.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       // setFarmList((data) => [...data, ...farmList]);
  //       // setFarmType(data);
  //       setLoading(false);
  //     });
  // }, [farmList]);

  // // loader 에 도달했을 때 이벤트
  // const handleObserver = useCallback(
  //   (entries) => {
  //     const target = entries[0];
  //     if (target.isIntersecting) {
  //       console.log("1");
  //       getBaljuList();
  //     }
  //   },
  //   [getBaljuList]
  // );

  // IntersectionObserver(스크롤 비동기 감지)
  // useEffect(() => {
  //   const option = {
  //     root: null,
  //     rootMargin: "20px",
  //     threshold: 0,
  //   };
  //   const observer = new IntersectionObserver(handleObserver, option);

  //   if (loader.current) observer.observe(loader.current);
  //   return () => observer.disconnect();
  // }, [handleObserver]);

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
      {/* <div ref={loader} /> */}
    </div>
  );
}
