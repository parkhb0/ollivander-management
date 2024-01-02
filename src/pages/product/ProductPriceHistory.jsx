import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import style from "../../styles/product/ProductPriceHistory.module.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Page A",
    cingle: 4000,
    naver: 2400,
    wadiz: 2400,
  },
  {
    name: "Page B",
    cingle: 3000,
    naver: 1398,
    wadiz: 2210,
  },
  {
    name: "Page C",
    cingle: 2000,
    naver: 9800,
    wadiz: 2290,
  },
  {
    name: "Page D",
    cingle: 2780,
    naver: 3908,
    wadiz: 2000,
  },
  {
    name: "Page E",
    cingle: 1890,
    naver: 4800,
    wadiz: 2181,
  },
  {
    name: "Page F",
    cingle: 2390,
    naver: 3800,
    wadiz: 2500,
  },
  {
    name: "Page G",
    cingle: 3490,
    naver: 4300,
    wadiz: 2100,
  },
];

export default function ProductPriceHistory() {
  const { farm_id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [farmItemPrice, setFarmItemPrice] = useState([]);

  const [cingle, setCingle] = useState([]);
  const [naver, setNaver] = useState([]);
  const [coupang, setCoupang] = useState([]);
  const [wadiz, setWadiz] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://yfu5lfc2cib2ki6daxkjdxhptm0bnmir.lambda-url.ap-northeast-2.on.aws?function=get_product_list_of_farm_with_price",
      {
        method: "POST",
        body: JSON.stringify({ farm_id: farm_id }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFarmItemPrice(data.selected_product_of_farm_items_with_price);
        let result = data.selected_product_of_farm_items_with_price;
        let _cingle = [];
        let _naver = [];
        for (let i = 0; i < result.length; i++) {
          if (result[i]["cingle_price"]) {
            _cingle.push(result[i]["cingle_price"]);
          }
          if (result[i]["naver_price"]) {
            _naver.push(result[i]["naver_price"]);
          }
        }
        setCingle(_cingle);
        setNaver(_naver);
        setLoading(false);
      });
  }, []);

  //   console.log("cingle = ", cingle);
  //   console.log("naver = ", naver);

  return (
    <div className={style.flex}>
      {loading ? (
        "로디중"
      ) : (
        <>
          <div className={style.info_box}>
            {cingle &&
              cingle.map((item, index) => (
                <div key={index}>{item.discount_price}</div>
              ))}
          </div>
          <div className={style.info_box}>
            {naver &&
              naver.map((item, index) => (
                <div key={index}>{item.discount_price}</div>
              ))}
          </div>
          <div style={{ width: "100%", height: 600 }}>
            <ResponsiveContainer>
              <BarChart width={600} height={600} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip
                  wrapperStyle={{ width: 150, backgroundColor: "#ccc" }}
                />
                <Legend
                  width={100}
                  wrapperStyle={{
                    top: 10,
                    right: 10,
                    // backgroundColor: "#f5f5f5",
                    // border: "1px solid #d5d5d5",
                    borderRadius: 3,
                    lineHeight: "20px",
                  }}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="cingle" fill="#f24202" />
                <Bar dataKey="naver" fill="#2bb807" />
                <Bar dataKey="wadiz" fill="#00b9bf" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}

//
