import React from "react";
import "./testimonials.css";
import Avatar1 from "../../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import Avatar2 from "../../assets/leilani-angel-K84vnnzxmTQ-unsplash.jpg";
import Avatar3 from "../../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import Avatar4 from "../../assets/leio-mclaren-L2dTmhQzx4Q-unsplash.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avatar1,
    name: "Alina Bran",
    review:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin.",
  },
  {
    avatar: Avatar2,
    name: "Tom Ford",
    review:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin.",
  },
  {
    avatar: Avatar3,
    name: "Alexa Josh",
    review:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin.",
  },
  {
    avatar: Avatar4,
    name: "Alexandr",
    review:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin.",
  },
];
export default function Testimonials() {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="clients__name">{name}</h5>
              <small className="clients__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
