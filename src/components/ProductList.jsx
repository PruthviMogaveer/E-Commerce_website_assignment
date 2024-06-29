import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ProductList = ({ category }) => {
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const prev = () => {
        sliderRef.current.slickPrev();
    };

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="mt-8 mb-8 max-md:mt-4 max-md:mb-10 relative">
            <div className="w-[95%] mx-auto slider-container">
                <Slider {...settings} ref={sliderRef}>
                    {category.products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </Slider>
                <div className="max-md:hidden cursor-pointer bg-slate-200 h-[22.8rem] max-lg:h-[20.9rem] max-md:h-[18.9rem] absolute top-2 flex justify-center items-center left-0"
                    onClick={prev}
                >
                    <button
                        className="px-2"
                    >
                        <FontAwesomeIcon icon={faAngleLeft} size='xl' />

                    </button>
                </div>
                <div className="max-md:hidden cursor-pointer bg-slate-200 h-[22.8rem] max-lg:h-[20.9rem] max-md:h-[18.9rem] absolute top-2 right-0 flex justify-center items-center"
                    onClick={next}
                >
                    <button
                        className="px-2"
                    >
                        <FontAwesomeIcon icon={faAngleRight} size='xl' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
