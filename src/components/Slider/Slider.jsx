import s from "./Slider.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import kovta from "../../assets/kovta.jpg";
import bumazhka from "../../assets/bumazhka.jpg"
import { Autoplay } from "swiper";
import { dataslider } from "../constans/slider";
const Slider = () => {
    return (
        <div>
             <div className={s.container} id="blog">
      <div className={s.blog_title}>
        <h1>Feature Blog</h1>
      </div>
      <div className={s.blog_desc}>
        <p>Read Latest Delicious Posts And News</p>
      </div>
      <Swiper
        loop
        speed={3000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}

        breakpoints={{
          320: {
            slidesPerView:1,
            spaceBetween:200,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 370,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1023: {
            slidesPerView:2,
            spaceBetween:210,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        modules={[ Autoplay]}
        className={s.data_slider}
      >
        {dataslider.map((item) =>(
          <SwiperSlide>
  <div className={s.data_slider_card}>
    <div className={s.data_slider_card_title}>
    <img src={item.img} alt="img" /> 
       <div className={s.coment}>
      <img src={kovta} alt="shishka" /> <p>By Vishal Patel</p>
      <img src={bumazhka} alt="coment" /> <p> No Comment</p>
    </div>
    <h1 className={s.make}>Make it Simple</h1>
    <p className={s.lorem}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Sed tincidunt, erat in malesuada <br /> aliquam, est…</p>
    </div>
  </div>
</SwiperSlide>
        ))}

      </Swiper>
    </div>
        </div>
    );
};

export default Slider;