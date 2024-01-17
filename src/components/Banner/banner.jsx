import React from "react";
import COLORS from "../../assets/styles/colors";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import theme from "../../lib/styles/theme";

const banner = [
  {
    src:
      "https://t1.daumcdn.net/makers_smith/file/items/100016247/masters/bfcf2692ddc34f0a8017fa1a6b6a841b.jpg?type=thumb&opt=C640x360.i",
  },
  {
    src:
      "https://t1.daumcdn.net/makers_smith/file/items/100016857/masters/055e8a505e93402a8690995197fc121a.jpg?type=thumb&opt=C640x360.i",
  },
];

export default function Banner() {
  console.log("theme= ", theme.bp);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div style={{ width: theme.bp.xLarge }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {banner.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
