import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// slide image
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={false}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper text-center my-8"
    >
      <SwiperSlide>
        <div className="grid">
          <img src={slide1} className="row-start-1 col-start-1" />
          <h3 className="text-4xl uppercase row-start-1 col-start-1 self-end mb-4 bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-700">
            salad
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid">
          <img src={slide2} className="row-start-1 col-start-1" />
          <h3 className="text-4xl uppercase row-start-1 col-start-1 self-end mb-4 bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-700">
            pizza
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid">
          <img src={slide3} className="row-start-1 col-start-1" />
          <h3 className="text-4xl uppercase row-start-1 col-start-1 self-end mb-4 bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-700">
            soup
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid">
          <img src={slide4} className="row-start-1 col-start-1" />
          <h3 className="text-4xl uppercase row-start-1 col-start-1 self-end mb-4 bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-700">
            desert
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid">
          <img src={slide5} className="row-start-1 col-start-1" />
          <h3 className="text-4xl uppercase row-start-1 col-start-1 self-end mb-4 bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-700">
            salad
          </h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
