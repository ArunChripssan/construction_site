"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Image from "next/image";
import Slider from "react-slick";
import {subCarouselImages} from '../../../data/CarouselImg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SubCarousel.scss'

const images = [1, 2, 3, 4, 5];

const SubCarousel = () => {
    const settings = {
      centerMode: true,
      centerPadding: "80px",
      slidesToShow: 3,
      arrows: true,
      dots: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      infinite: true,
      cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                centerPadding: "30px",
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                centerPadding: "20px",
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                centerPadding: "10px",
              },
            },
        ],
    };
    
    return (
        <div className="slider-container">
            <Slider {...settings}>
                    {subCarouselImages.map((data, i) => {
                        return(
                            <div className="sliderCard">
                                <Image
                                    src={data.imgSrc}
                                    alt=""
                                    width={500}
                                    height={200}
                                />
                            </div>
                        );
                    })}
            </Slider>
        </div>
    );
};

export default SubCarousel;
