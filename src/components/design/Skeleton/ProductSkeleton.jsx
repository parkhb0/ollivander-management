import React from "react";
import Skeleton from "react-loading-skeleton";
import style from "../../../styles/ProductCard.module.css";

export default function ProductSkeleton({ cards }) {
  console.log("cards =", cards);
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((item, index) => (
          <div key={index}>
            <Skeleton count={5} height={30} />
            {/* <div className={style.salees_channel_box}>
              <Skeleton count={5} />
            </div>
            <div className={style.farm_name}>
              <Skeleton count={1} />
            </div>
            <div className={style.farm_address}>
              <Skeleton count={1} />
            </div>
            <div className={style.farm_cultivar}>
              <Skeleton count={1} />
            </div>
            <div className={style.farm_btn_wrap}>
              <button>
                <Skeleton count={1} height={30} />
              </button>
            </div> */}
          </div>
        ))}
    </>
  );
}
