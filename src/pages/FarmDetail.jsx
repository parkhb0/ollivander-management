import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FarmDetail() {
  const { farm_id } = useParams();
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

  console.log(foundFarmItem);
  return <div>{foundFarmItem.farm_address}</div>;
}
