import React, { FC } from 'react'
import './button.scss'

interface ButtonProps {
   children: React.ReactNode;
   onClick: () => void;
   link: string;
}

const Button: FC<ButtonProps> = ({ children, link, onClick }) => {
   return (
      <a
         className='btn'
         href={link}
         onClick={onClick}>
         {children}
      </a>
   )
}

export default Button