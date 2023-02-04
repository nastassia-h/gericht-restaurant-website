import React from 'react'
import { bg, chef, quote, sing } from '../assets'
import Title from '../components/title/Title'
const Believe = () => {
   return (
      <div className='believe bg' style={{ backgroundImage: `url(${bg})` }}>
         <div className='believe__container container'>
            <div className='believe__content'>
               <div className='believe__image bg' style={{ backgroundImage: `url(${chef})` }}></div>
               <div className='believe__column'>
                  <Title title='What we believe in' subtitle='Chef’s Word' />
                  <div className='believe__text'>
                     <img src={quote} alt="" /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</span>
                  </div>
                  <div className='believe__chef'>Kevin Luo</div>
                  <p>Chef & Founder</p>
                  <img className='sign' src={sing} alt="" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Believe