import React, { useRef } from 'react'
import Article from '../components/article/Article'
import { FiInstagram } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { imageInst } from '.'
//import 'swiper/css'

const Gallery = () => {

   const scrollRef = useRef<null | HTMLParagraphElement>(null);

   const scroll = (direction: string) => {
      const { current } = scrollRef;
      if (direction === 'left') {

         if (current)
            current.scrollLeft = current.scrollLeft - 300;
      } else {
         if (current)
            current.scrollLeft = current.scrollLeft + 300;
      }
   }

   return (
      <div className='gallery'>
         <div className='gallery__content'>
            <div className='gallery__title'>
               <Article title='Photo Gallery' subtitle='Instagram' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.' buttonText='View More' onClick={() => { }} link='' />
            </div>
            <div className='gallery__photo'>
               <Swiper
                  slidesPerView={'auto'}
                  loop={true}
                  loopedSlides={4}
                  spaceBetween={32}
               >
                  {imageInst.map(item =>
                     <SwiperSlide key={item.id} className='gallery__photo-item'>
                        <a href={item.link} className='gallery__photo-content'>
                           <img src={item.imgUrl} alt="" />
                           <FiInstagram />
                        </a>
                     </SwiperSlide>
                  )}
               </Swiper>
            </div>
         </div>
      </div>
   )
}

export default Gallery