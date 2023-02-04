import React, { FC } from 'react'
import { spoon } from '../../assets';
import './title.scss'

interface TitleProps {
   title: string;
   subtitle: string;

}

const Title: FC<TitleProps> = ({ title, subtitle }) => {
   return (
      <div className='title'>
         <div className='subtitle'>{subtitle}</div>
         <img src={spoon} alt="" />
         <div className='big-title'>{title}</div>
      </div>
   )
}

export default Title