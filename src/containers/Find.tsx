import React from 'react'
import { bg, findus } from '../assets'
import Button from '../components/button/Button'
import Title from '../components/title/Title'

const Find = () => {
   return (
      <div className='find bg' style={{ backgroundImage: `url(${bg})` }}>
         <div className='find__container container'>
            <div className='find__content'>
               <div className='find__column'>
                  <Title title='Find Us' subtitle='Contact' />
                  <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                  <div className='find__hours'>
                     <p>Opening Hours</p>
                     <p>Mon - Fri: 10:00 am - 02:00 am</p>
                     <p>Sat - Sun: 10:00 am - 03:00 am</p>
                  </div>
                  <Button onClick={() => { }} link=''>Visit Us</Button>
               </div>
               <div className='find__image bg' style={{ backgroundImage: `url(${findus})` }}></div>
            </div>
         </div>
      </div>
   )
}

export default Find