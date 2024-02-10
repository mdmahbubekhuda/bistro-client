import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { LiaComments } from "react-icons/lia";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-12">
      <SectionTitle heading="testimonials" subHeading="what our clients say" />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="w-9/12 mx-auto text-center space-y-8">
              <LiaComments className="text-6xl mx-auto" />
              <Rating
                style={{ maxWidth: 100, margin: "20px auto" }}
                value={review.rating}
                readOnly
              />
              <p className="text-justify">{review.details}</p>
              <h3 className="text-2xl text-yellow-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
