import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
// import "swiper/css/effect-flip";
// import "swiper/css/lazy";

import { Zoom, Navigation, EffectCube, Pagination } from "swiper/modules";

import titleImage from "./assets/Cola_1/title.jpg";

const imagePaths = [
  require("./assets/Cola_1/1.jpg"),
  require("./assets/Cola_1/2.jpg"),
  require("./assets/Cola_1/3.jpg"),
  require("./assets/Cola_1/4.jpg"),
  require("./assets/Cola_1/5.jpg"),
  require("./assets/Cola_1/6.jpg"),
  require("./assets/Cola_1/7.jpg"),
  require("./assets/Cola_1/8.jpg"),
  require("./assets/Cola_1/9.jpg"),
  require("./assets/Cola_1/10.jpg"),
  require("./assets/Cola_1/11.jpg"),
  require("./assets/Cola_1/12.jpg"),
  require("./assets/Cola_1/13.jpg"),
  require("./assets/Cola_1/14.jpg"),
  require("./assets/Cola_1/15.jpg"),
  require("./assets/Cola_1/16.jpg"),
  require("./assets/Cola_1/17.jpg"),
  require("./assets/Cola_1/18.jpg"),
  require("./assets/Cola_1/19.jpg"),
  require("./assets/Cola_1/20.jpg"),
  require("./assets/Cola_1/21.jpg"),
  require("./assets/Cola_1/22.jpg"),
  require("./assets/Cola_1/23.jpg"),
  require("./assets/Cola_1/24.jpg"),
  require("./assets/Cola_1/25.jpg"),
  require("./assets/Cola_1/26.jpg"),
  require("./assets/Cola_1/27.jpg"),
  require("./assets/Cola_1/28.jpg"),
  require("./assets/Cola_1/29.jpg"),
  require("./assets/Cola_1/30.jpg"),
  // Add paths for the remaining images
];

function App() {
  return (
    <Swiper
      effect={"cube"}
      zoom={true}
      navigation={true}
      lazy={true}
      pagination={{
        clickable: true,
      }}
      modules={[Zoom, Navigation, Pagination, EffectCube]}
      className="mySwiper"
      flipEffect={{}}
    >
      <SwiperSlide>
        <img src={titleImage} alt="title" />
      </SwiperSlide>
      {imagePaths.map((imagePath, index) => (
        <SwiperSlide key={index}>
          <img src={imagePath} alt={`Page ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default App;
