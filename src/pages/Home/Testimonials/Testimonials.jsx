import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTItle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        heading={"testimonials"}
        subHeading={"What Our Client Say"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                className="text-center"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                    />
                    <FaQuoteLeft className="w-16 h-16 mt-10"></FaQuoteLeft>
              <p className="py-8">{review.details}</p>
              <h3 className="text-3xl text-[#D99904]">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
