import React from 'react';
import Slider from 'react-slick';
import { highlights } from './Highlights';
import CarouselItem from './CarouselItem';


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
                {highlights.map((item)=><CarouselItem image={item.image} title = {item.title}/>)}
            </Slider>
        </div>
    )
}

export default MultipleItemCarousel;