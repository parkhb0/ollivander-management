import React, { Suspense, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Button from "../components/design/Button/Button";
import style from "../styles/Farm/Farm.module.css";

export default function FarmDetail() {
  const { farm_id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [foundFarmItem, setFoundFarmItem] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://yfu5lfc2cib2ki6daxkjdxhptm0bnmir.lambda-url.ap-northeast-2.on.aws?function=get_farm_info",
      {
        method: "POST",
        body: JSON.stringify({ farm_id: farm_id }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFoundFarmItem(data.found_farm_item);
        setLoading(false);
      });
  }, []);

  return (
    <div className={style.farmCardWrap}>
      <div className={style.famrInfoWrap}>
        <div className={style.famrImageBox}>
          <img src="https://t1.daumcdn.net/makers_smith/file/items/100017466/masters/0fad56e6ef3e4bbf9e9b5d36eab5d598.jpg?opt=C640x360.i&type=thumb" />
        </div>
        <div className={style.famrInfoBox}>
          <p>farm_name: {foundFarmItem.farm_name}</p>
          <p>farm_address : {foundFarmItem.farm_address}</p>
          <p>
            farm_available :{" "}
            {foundFarmItem.farm_available ? "이용가능" : "불가능"}
          </p>
          <p>farm_type: {foundFarmItem.farm_type}</p>
          <p>update_datetime: {foundFarmItem.update_datetime}</p>
          <p>farm_location: {foundFarmItem.farm_location}</p>
          <p style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ width: "100%", marginBottom: "5px" }}>상품판매처</div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {foundFarmItem.sales_channel
                ? Object.entries(foundFarmItem.sales_channel).map(
                    (entrie, idx) => {
                      return (
                        <div key={idx}>
                          <div style={{ marginBottom: "0px" }}>{entrie[0]}</div>
                          <div>{entrie[1] ? "트루" : "폴스"}</div>
                        </div>
                      );
                    }
                  )
                : null}
            </div>
          </p>
        </div>
      </div>
      <div style={{ display: "flex", margin: "20px 0px" }}>
        <button onClick={() => navigate(`/farm/${farm_id}`)}>팜정보</button>
        <button onClick={() => navigate(`/farm/${farm_id}/product_add`)}>
          상품옵션등록
        </button>
        {/* <button onClick={() => navigate(`/farm/${farm_id}/product_price`)}>
        상품가격정보
      </button> */}
        <Button
          color={"danger"}
          plain={"false"}
          border={"false"}
          round={""}
          circle={""}
          disabled={""}
          size={"xlarge"}
          alignleft="false"
          alignright="true"
          buttonColor={""}
          onClick={() => navigate(`/farm/${farm_id}/product_price`)}
        >
          상품가격정보
        </Button>
      </div>

      <Outlet />
    </div>
  );
}
