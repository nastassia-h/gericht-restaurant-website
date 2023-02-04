import React from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import Title from '../title/Title'
import './newsletter.scss'

const Newsletter = () => {
   return (
      <div className='newsletter'>
         <Title title='Subscribe to Our Newsletter' subtitle='Newsletter' />
         <p>And never miss latest Updates!</p>
         <div className='newsletter__form'>
            <Input />
            <Button link={''} onClick={() => { }}>Subscribe</Button>
         </div>
      </div>
   )
}

export default Newsletter