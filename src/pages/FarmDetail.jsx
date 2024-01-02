import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

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
    <div>
      {foundFarmItem.farm_address}
      <button onClick={() => navigate(`/farm/${farm_id}`)}>팜정보</button>
      <button onClick={() => navigate(`/farm/${farm_id}/product_add`)}>
        상품등록
      </button>
      <button onClick={() => navigate(`/farm/${farm_id}/product_price`)}>
        상품가격정보
      </button>

      <Outlet />
    </div>
  );
}
