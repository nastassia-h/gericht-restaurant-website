import React, { FC } from 'react'
import { IMenu } from '../../containers/index';
import './menu.scss'

interface MenuItemProps {
   item: IMenu;
}

const MenuItem: FC<MenuItemProps> = ({ item }) => {
   return (
      <div className='menu-item'>
         <div className='menu-item__header'>
            <div className='menu-item__name'>{item.name}</div>
            <div className='menu-item__price'>{item.price}</div>
         </div>
         <div className='menu-item__footer'>
            {item.components.map((component) =>
               <div className='menu-item__component'>{component}</div>
            )}
         </div>
      </div>
   )
}

export default MenuItem