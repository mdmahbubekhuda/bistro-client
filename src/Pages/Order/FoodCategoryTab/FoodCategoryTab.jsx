import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./pagination-styles.css";
import FoodCard from "../FoodCard/FoodCard";

const FoodCategoryTab = ({ foodItems }) => {
  const totalItems = foodItems.length;
  const itemsPerPage = 6;
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      {pages.map((page) => (
        <SwiperSlide key={page}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 place-items-center place-content-center">
            {foodItems
              .slice(
                parseInt(page * itemsPerPage),
                parseInt(page * itemsPerPage + itemsPerPage)
              )
              .map((foodItem) => (
                <FoodCard key={foodItem._id} foodItem={foodItem} />
              ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

FoodCategoryTab.propTypes = {
  foodItems: PropTypes.array.isRequired,
};

export default FoodCategoryTab;
