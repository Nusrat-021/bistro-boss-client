import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'

const Category = () => {
  return (
      <div>
          <div className="w-full">
              <h2 className="text-5xl border-y-2 text-center my-20 w-1/2 mx-auto p-5">Order Online</h2>
          </div>
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
                  <h3 className="text-4xl uppercase -mt-20 shadow-black text-white text-center">Salads</h3>
              </SwiperSlide>
              <SwiperSlide>
                  <img src={slider2} alt="" />
                  <h3 className="text-4xl uppercase -mt-20 shadow-black text-white text-center">Pizzas</h3>
              </SwiperSlide>
              <SwiperSlide>
                  <img src={slider3} alt="" />
                  <h3 className="text-4xl uppercase -mt-20 shadow-black text-white text-center">Soups</h3>
              </SwiperSlide>
              <SwiperSlide>
                  <img src={slider4} alt="" />
                  <h3 className="text-4xl uppercase -mt-20 shadow-black text-white text-center">Desserts</h3>
              </SwiperSlide>
              <SwiperSlide>
                  <img src={slider5} alt="" />
                  <h3 className="text-4xl uppercase shadow-black text-black -mt-16 text-center">Salads</h3>
              </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Category;
