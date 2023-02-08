import React, { useState } from 'react'
import {imgArr} from './HomeBannerImages'
import './Home.css';
import './ImageCorosoul.css'
const ImageCorosoul = () => {
    const [currenIndex,setCurrentIndex] = useState(0);
    const prevBtn = ()=>{
    setCurrentIndex(currenIndex === 0 ? imgArr.length-1 : currenIndex - 1)
    }
    const nextBtn = ()=>{
        setCurrentIndex(currenIndex === imgArr.length - 1 ? 0 : currenIndex+1  )
    }
  return (
    <div className='img-carousel'>
        <button className='pre-btn' onClick={prevBtn}><p>&lt;</p></button>
          <button className='next-btn' onClick={nextBtn}><p>&gt;</p></button>
        <div className='img-container'>
            <img src={imgArr[currenIndex].url} alt="" className='home_image' />
        </div>
    </div>
  )
}

export default ImageCorosoul