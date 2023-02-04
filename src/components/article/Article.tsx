import React, { FC } from 'react'
import Button from '../button/Button'
import Title from '../title/Title'
import './article.scss'

interface ArticleProps {
   title: string;
   subtitle: string;
   text: string;
   onClick: () => void;
   link: string;
   buttonText: string;
}

const Article: FC<ArticleProps> = ({ title, subtitle, text, onClick, link, buttonText }) => {
   return (
      <div>
         <Title title={title} subtitle={subtitle} />
         <div className='article__text'>{text}</div>
         <Button link={link} onClick={onClick}>{buttonText}</Button>
      </div>
   )
}

export default Article