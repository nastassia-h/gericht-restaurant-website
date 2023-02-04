import React, { FC } from 'react'
import MenuItem from './MenuItem'
import { IMenu } from '../../containers/index'

interface MenuProps {
   menu: IMenu[],
}

const Menu: FC<MenuProps> = ({ menu }) => {
   return (
      <div className='menu__column'>
         {menu.map((m) =>
            <div className='menu-item'>
               <MenuItem item={m} />
            </div>
         )}
      </div>
   )
}

export default Menu