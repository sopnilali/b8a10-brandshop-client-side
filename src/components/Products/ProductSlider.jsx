import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

const ProductSlider = () => {

    const bnane = useParams()

    const [sliderdata, setSliderData] = useState([])

    useEffect(()=> {
        fetch(`https://brandshop-server-side-csesopnil.vercel.app/product-sliders/${bnane.name}`)
        .then(res => res.json())
        .then(data =>setSliderData(data))
    },[])

    return (
        <>
        <div className='max-w-7xl mx-auto'>

                <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
   
      {
                            sliderdata.map( slider =>
                                <SwiperSlide>
                               <div className='m-2 px-2 py-2'>
                               <div className='flex justify-center'>
                               <img className=' md:w-3/6 md:h-full' src={slider.ads_img} alt="" />
                               </div>
                               </div>
                               </SwiperSlide>
                                )
      }
    </Swiper>
                </div>
                    
                </>
    );
};

export default ProductSlider;