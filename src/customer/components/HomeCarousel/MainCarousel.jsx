import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';
import './MainCarouselStyle.css'


const MainCarousel = () => {
    const items=mainCarouselData.map((item)=>(
        <img className='carousel-image cursor-pointer h-[30rem]' role='presentation' src={item.image} alt=""  ></img>
    ))

    return(
        <div className='carousel-container'>
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite            
        />
    </div>
    )
}

export default MainCarousel;