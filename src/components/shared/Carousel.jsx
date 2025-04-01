import React, { useState } from 'react';
import Slider from 'react-slick';
import {
    Card,
    CardHeader,
    CardFooter,
    Image,
    Button,
    Skeleton,
} from '@nextui-org/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselItem = ({ image, height, isHoverable, isPressable, objectFit }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = (e) => {
        if (isPressable && image.link) {
            window.open(image.link, '_blank'); // Open link in a new tab
        }
        e.stopPropagation(); // Prevent any unwanted propagation
    };

    return (
        <div
            className={`px-2 ${isPressable ? 'cursor-pointer' : 'cursor-default'}`} // Change cursor style
            onClick={handleClick}
        >
            <Card
                className={`w-full h-full relative overflow-hidden border-none ${objectFit ? "" : "m-3"}`}
                onMouseEnter={() => setIsHovered(isHoverable)} // Hover start
                onMouseLeave={() => setIsHovered(false)} // Hover end
                style={{ height }}
                radius={"sm"}
            >
                {/* Gradient that improves text readability*/}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/70 to-transparent z-10"></div>

                <CardHeader className="absolute z-20 top-1 flex-col items-start">
                    {image.label && (
                        <p className="text-tiny text-white/60 uppercase font-bold">
                            {image.label}
                        </p>
                    )}
                    <h4 className="text-white font-medium text-lg text-left">{image.alt}</h4>
                </CardHeader>

                <Image
                    removeWrapper
                    radius={"sm"}
                    src={image.src}
                    alt={image.alt}
                    className={`z-0 w-full h-full object-cover transition-transform duration-300 ${
                        isHovered ? 'transform scale-105' : ''
                    } ${objectFit ? 'object-cover' : 'object-contain p-1'}`}
                    fallback={<Skeleton className="w-full h-full" />}
                />
            </Card>
        </div>
    );
};


const Carousel = ({
    images,
    height = '300px',
    slidesToShow = 3,
    autoplay = true,
    speed = 300,
    slidesToScroll = 1,
    isHoverable = false,
    isPressable = false,
    autoplaySpeed = 0,
    objectFit = true,
    cssEase = '',
    arrows = true,
}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed,
        slidesToShow,
        autoplay,
        autoplaySpeed,
        slidesToScroll,
        swipeToSlide: true,
        arrows,
        cssEase,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1, arrows: false },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <CarouselItem
                    key={index}
                    image={image}
                    height={height}
                    isHoverable={isHoverable}
                    isPressable={isPressable}
                    objectFit={objectFit}
                    link={image.link} // Ensure link is passed
                />
            ))}
        </Slider>
    );
};


export default Carousel;
