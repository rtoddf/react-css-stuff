import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./default.scss";

import servpro from './images/servpro.png';
import mt from './images/mt.jpg';
import rooms from './images/rooms.png';
import pella from './images/pella.png';

// import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function SwiperTrial() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={false}
                // pagination={{
                //   clickable: true,
                // }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        slidesPerGroup: 1,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                        slidesPerGroup: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                        slidesPerGroup: 5,
                    },
                }}
                navigation={false}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="imageHolder">
                        <a href="#">
                            <img src={mt} />
                        </a>
                    </div>
                    <div className="content">
                        <a href="#">
                            <h4>Meriwether &amp; Tharp</h4>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imageHolder">
                        <img src={servpro} />
                    </div>
                    <div className="content">
                        <h4>Learn more today</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imageHolder">
                        <img src={rooms} />
                    </div>
                    <div className="content">
                        <h4>Rooms To Go</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imageHolder">
                        <img src={pella} />
                    </div>
                    <div className="content">
                        <h4>Get started today</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imageHolder">
                        <img src={mt} />
                    </div>
                    <div className="content">
                        <h4>five</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imageHolder">
                        <img src={servpro} />
                    </div>
                    <div className="content">
                        <h4>six</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imageHolder">
                        <img src={mt} />
                    </div>
                    <div className="content">
                        <h4>seven</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="imageHolder">
                        <img src={servpro} />
                    </div>
                    <div className="content">
                        <h4>eight</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwiperTrial;
