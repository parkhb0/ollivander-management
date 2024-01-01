import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/ProductCard.module.css";

export default function ProductCard({ farm }) {
  const {
    farm_address,
    farm_id,
    farm_type,
    farm_location,
    farm_cultivar,
    farm_name,
    marked_datetime,
    update_datetime,
    update_user_name,
    sales_channel,
  } = farm;
  const [salesChannel, setSalesChannel] = useState(
    Object.values(sales_channel)
  );
  const salesChannelName = Object.keys(farm.sales_channel);
  const navigate = useNavigate();

  const handleSalesChannelActiveChange = (e) => {
    const _sales_channel = [...salesChannel];
    _sales_channel[e] = !_sales_channel[e];
    setSalesChannel(_sales_channel);
  };

  return (
    <div>
      <div className={style.salees_channel_box}>
        {Object.values(salesChannel).map((channel, key) => {
          if (salesChannelName[key] === "wadiz") {
            return (
              <div
                className={style.channel}
                key={key}
                value={key}
                onClick={() => {
                  handleSalesChannelActiveChange(key);
                }}
              >
                {channel ? (
                  <img
                    src={require("../assets/images/icon_list/shop_icon_wadiz-on.png")}
                    width={20}
                  />
                ) : (
                  <img
                    src={require("../assets/images/icon_list/shop_icon_wadiz-off.png")}
                    width={20}
                  />
                )}
              </div>
            );
          } else if (salesChannelName[key] === "kakao") {
            return (
              <div
                className={style.channel}
                key={key}
                value={key}
                onClick={() => {
                  handleSalesChannelActiveChange(key);
                }}
              >
                {channel ? (
                  <div>
                    <img
                      src={require("../assets/images/icon_list/shop_icon_kakao-on.png")}
                      width={20}
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      src={require("../assets/images/icon_list/shop_icon_kakao-off.png")}
                      width={20}
                    />
                  </div>
                )}
              </div>
            );
          } else if (salesChannelName[key] === "naver") {
            return (
              <div
                className={style.channel}
                key={key}
                value={key}
                onClick={() => {
                  handleSalesChannelActiveChange(key);
                }}
              >
                {channel ? (
                  <div>
                    <img
                      src={require("../assets/images/icon_list/shop_icon_naver-on.png")}
                      width={20}
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      src={require("../assets/images/icon_list/shop_icon_naver-off.png")}
                      width={20}
                    />
                  </div>
                )}
              </div>
            );
          } else if (salesChannelName[key] === "alwayz") {
            return (
              <div
                className={style.channel}
                key={key}
                value={key}
                onClick={() => {
                  handleSalesChannelActiveChange(key);
                }}
              >
                {channel ? (
                  <div>
                    <img
                      src={require("../assets/images/icon_list/shop_icon_alwayz-on.png")}
                      width={20}
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      src={require("../assets/images/icon_list/shop_icon_alwayz-off.png")}
                      width={20}
                    />
                  </div>
                )}
              </div>
            );
          } else if (salesChannelName[key] === "cingle") {
            return (
              <div
                className={style.channel}
                key={key}
                value={key}
                onClick={() => {
                  handleSalesChannelActiveChange(key);
                }}
              >
                {channel ? (
                  <div>
                    <img
                      src={require("../assets/images/icon_list/shop_icon_cingle-on.png")}
                      width={20}
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      src={require("../assets/images/icon_list/shop_icon_cingle-off.png")}
                      width={20}
                    />
                  </div>
                )}
              </div>
            );
          } else if (salesChannelName[key] === "11thstreet") {
            return (
              <div
                className={style.channel}
                key={key}
                value={key}
                onClick={() => {
                  handleSalesChannelActiveChange(key);
                }}
              >
                {channel ? (
                  <div>
                    <img
                      src={require("../assets/images/icon_list/shop_icon_11-on.png")}
                      width={20}
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      src={require("../assets/images/icon_list/shop_icon_11-off.png")}
                      width={20}
                    />
                  </div>
                )}
              </div>
            );
          }
        })}
      </div>
      <div className={style.farm_name}>{farm_name}</div>
      <div className={style.farm_address}>{farm_address}</div>
      <div className={style.farm_cultivar}>
        <span style={{ fontWeight: "600", width: "100%" }}>상품명</span>
        {farm_cultivar}
      </div>
      <div className={style.farm_btn_wrap}>
        <button onClick={() => navigate(`/farm/${farm_id}`)}>
          제품 자세히 보기
        </button>
      </div>
    </div>
  );
}
