import React from 'react';
import carousel1 from '../../../images/carousel/carousel-1.jpg';
import carousel2 from '../../../images/carousel/carousel-2.jpg';
import carousel3 from '../../../images/carousel/carousel-3.jpg';

const Carousel = () => {
    return (
        <div className="carousel w-4/5 mx-auto lg:h-[80vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={carousel1} alt='' className="w-full" />
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-[90%]">
                    <a href="#slide4" className="btn btn-circle bg-white border-0 text-black">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-white border-0 text-black ml-3">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={carousel2} alt='' className="w-full" />
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-[90%]">
                    <a href="#slide1" className="btn btn-circle bg-white border-0 text-black">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-white border-0 text-black ml-3">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={carousel3} alt='' className="w-full" />
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-[90%]">
                    <a href="#slide2" className="btn btn-circle bg-white border-0 text-black">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-white border-0 text-black ml-3">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;