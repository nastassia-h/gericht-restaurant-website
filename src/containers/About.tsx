import React from 'react'
import { bg, G, knife } from '../assets'
import Button from '../components/button/Button'
import Title from '../components/title/Title'


const About = () => {
   return (
      <div className='about bg' style={{ backgroundImage: `url(${bg})` }}>
         <div className='about-container container' >
            <div className='about__content' style={{ backgroundImage: `url(${G})` }}>
               <div className='about__column about__column_l'>
                  <Title title='About Us' subtitle='' />
                  <div className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</div>
                  <Button link='' onClick={() => { }}>Know more</Button>
               </div>
               <div className='about__image' style={{ backgroundImage: `url(${knife})` }}></div>
               <div className='about__column about__column_r'>
                  <Title title='Our History' subtitle='' />
                  <div className='about__text'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</div>
                  <Button link='' onClick={() => { }}>Know more</Button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About