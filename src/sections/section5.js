import './main.css';
import besh from '../photo/5.png';


import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: "https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404.jpg",

        altText: 'Michel Johns',
        caption: 'Michel Johns'
    },
    {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",

        altText: 'Clara Johnson',
        caption: 'Clara Johnson'
    },
    {
        src: "https://image.shutterstock.com/image-photo/business-concept-portrait-handsome-man-260nw-663176611.jpg",
        altText: 'Jeff Bezos',
        caption: 'Jeff Bezos'
    }
];

const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <div className='swiper'> <img src={item.src} alt={item.altText} className='swimg' /></div>
                <CarouselCaption captionText={<div className='text-dark'>{item.caption}</div>} captionHeader={<div className='text-dark'>{item.caption}</div>} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Example;