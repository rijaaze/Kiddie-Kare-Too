import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="Gallery-images">
        <img src={gallery_1} alt="Gallery Image 1" />
        <img src={gallery_2} alt="Gallery Image 2" />
        <img src={gallery_3} alt="Gallery Image 3" />
        <img src={gallery_4} alt="Gallery Image 4" />
        <button className='btn'>See more Here</button>
      </div>
    </div>
  )
}

export default Gallery