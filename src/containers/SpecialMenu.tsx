import React from 'react'
import { coctailes, wines } from './'
import { bg, bg01, menu } from '../assets'
import Menu from '../components/menu/Menu'
import Title from '../components/title/Title'

const SpecialMenu = () => {
   return (
      <div className='specialMenu bg' style={{ backgroundImage: `url(${bg})` }}>
         <div className='specialMenu-container container'>
            <div className='specialMenu__header'>
               <Title title='Today’s Special' subtitle='Menu that fits you palatte' />
            </div>
            <div className='specialMenu__body'>
               <div>
                  <Menu menu={wines} />
               </div>
               <div className='specialMenu__image' style={{ backgroundImage: `url(${bg01})` }}></div>
               <div>
                  <Menu menu={coctailes} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default SpecialMenu