import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../Imagens/Banner.jpg'
import Banner2 from '../Imagens/Banner2.jpg'
import Banner3 from '../Imagens/banhotosa.jpg'

function Banner() {
  return (
     <Carousel>
      <Carousel.Item>
        <img src={Banner1} className='Banners'/>
         </Carousel.Item>
      <Carousel.Item>
       <img src={Banner2} className='Banners'/>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Banner3} className='Banners'/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  )
}

export default Banner
