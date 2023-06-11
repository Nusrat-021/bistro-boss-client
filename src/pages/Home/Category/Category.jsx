import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTItle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        heading={'order online'}
      subHeading={'From 11:00am to 10:00pm'}
      ></SectionTitle>
      <section>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} alt="" />
            <h3 className="text-4xl uppercase -mt-20 shadow-black text-white text-center">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
            <h3 className="text-4xl uppercase -mt-20 shadow-black text-white text-center">
              Pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
            <h3 className="text-4xl uppercase -mt-20 shadow-black text-white text-center">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
            <h3 className="text-4xl uppercase -mt-20 shadow-black text-white text-center">
              Desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="" />
            <h3 className="text-4xl uppercase shadow-black text-black -mt-16 text-center">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
