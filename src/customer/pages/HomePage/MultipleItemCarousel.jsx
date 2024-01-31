import React from 'react';
import Slider from 'react-slick';
import { highlights } from './Highlights';
import carouselItem from './carouselItem';

const MultipleItemCarousel = () => {
    const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay:true,
          authplayspeed:2000,
          arrows:false,
        };
    return (
        <div>
            <Slider {...settings}>
                {highlights.map((item)=><carouselItem image={item.image} title = {item.title}/>)}
            </Slider>
        </div>
    )
}

export default MultipleItemCarousel;