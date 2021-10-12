import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import { Box } from '../design-system';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

const SlickSlider = ({children}) => {
    return(
        <Box width='100%' >
            <Slider {...settings}>
                {children ? (
                    children
                ) : (
                    <div>
                        <h1>Add Slides</h1>
                    </div>
                    )
                }
            </Slider>
        </Box>

    )
}

export default SlickSlider;