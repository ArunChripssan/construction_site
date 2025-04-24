"use client"

import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import {subCarouselImages} from '../../../data/CarouselImg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SubCarousel.scss'

const SubCarousel = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <div className="wrapper">
            <div className="SubCarouselContainer">
                <Slider {...settings}>
                    {subCarouselImages.map((data, i) => {
                        return(
                            <div className="slider">
                                <Image
                                    src={data.imgSrc}
                                    alt=""
                                    fill
                                    style={{objectFit: "cover"}}
                                    className="sliderImg"
                                    />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default SubCarousel;
