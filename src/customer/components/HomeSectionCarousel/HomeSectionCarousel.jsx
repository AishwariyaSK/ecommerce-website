import React from 'react'
import {useState} from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const HomeSectionCarousel = ({data}) =>  {
    const [activeIndex, setActiveIndex]=useState(0);
    const slideNext=()=>setActiveIndex(activeIndex+1);
    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const syncActiveIndex=({item})=>{setActiveIndex(item)}

    const responsive={
        0:{items:1},
        470:{items:2},
        720:{items:3},
        1024:{items:5}
    };

    // const items=mainCarouselData.map((item)=>(
    //     <img className='carousel-image cursor-pointer' role='presentation' src={item.image} alt=""  ></img>
    // ))

    const items=data.slice(0,15).map((item,index)=>(<HomeSectionCard key={index} product={item}/>))

    return(
        <div className='px-4 lg:px-8 '>
        <div className='relative p-5 '>
            <AliceCarousel
                items={items}
                // disableButtonsControls
                disableDotsControls
                responsive={responsive}
                onSlideChanged={syncActiveIndex}
                activeIndex={activeIndex}
            />
           {/* { activeIndex < items.length - responsive[1024].items && <Button onClick={slideNext} variant="contained" className="z-50 " sx={{position:"absolute", top:"8rem", right:"0rem", transform:"translateX(50%) rotate(90deg)", bgcolor:"grey"}} aria-label="next">
                <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", color:"black"}}/>
            </Button>}
            {activeIndex>0 &&<Button onClick={slidePrev} variant="contained" className="z-50 " sx={{position:"absolute", top:"8rem", left:"0rem", transform:"translateX(-50%) rotate(90deg)", bgcolor:"grey"}} aria-label="previous">
                <KeyboardArrowLeftIcon sx={{transform:"rotate(-90deg)", color:"black"}}/>
            </Button>} */}
        </div> 
    </div> 
    )
}


export default HomeSectionCarousel;
