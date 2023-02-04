import React from 'react'
import { bg, laurels, logo } from '../assets'
import Title from '../components/title/Title'
import { laures } from './'

const Laures = () => {
   return (
      <div className='laures bg' style={{ backgroundImage: `url(${bg})` }}>
         <div className='laures__container container'>
            <div className='laures__logo'>
               <img src={logo} alt="" />
            </div>
            <div className='laures__content'>
               <div className='laures__column'>
                  <Title title='Our Laurels' subtitle='Awards & recognition' />
                  <div className='laures__items'>
                     {laures.map(l =>
                        <div key={l.id} className='laures__item'>
                           <img src={l.imgUrl} alt="" />
                           <div className='laures__text'>
                              <div>{l.name}</div>
                              <p>{l.info}</p>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
               <div className='laures__image'
                  style={{ backgroundImage: `url(${laurels})` }}
               >
               </div>
            </div>
         </div>
      </div>
   )
}

export default Laures