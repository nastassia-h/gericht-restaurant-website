import React from 'react'
import { bg, welcome } from '../assets'
import Article from '../components/article/Article'

const Welcome = () => {
   return (
      <div className='welcome' style={{ backgroundImage: `url(${bg})` }}>
         <div className='welcome__container container'>
            <div className='welcome__content'>
               <Article title='The key to Fine dining' subtitle='Chase the new Flavour' text='Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus ' buttonText='Explore Menu' onClick={() => { }} link='' />
               <div className='welcome__image bg' style={{ backgroundImage: `url(${welcome})` }}></div>
            </div>
            <p className='welcome__date'>01  <span> | </span>  02 03 04</p>
         </div>

      </div>
   )
}

export default Welcome