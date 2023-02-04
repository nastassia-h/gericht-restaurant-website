import React from 'react'
import { meal } from '../assets'

const Intro = () => {
   return (
      <div className='app_video'>
         <video
            src={meal}
            autoPlay={true}
            loop={true}
            controls={false}
            muted
         />
      </div>
   )
}

export default Intro