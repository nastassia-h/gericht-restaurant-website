import React from 'react'
import Newsletter from '../components/newsletter/Newsletter'
import { footerLinks } from './index'
import { bg, logo } from '../assets'
import Title from '../components/title/Title'
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'

const Footer = () => {
   return (
      <div className='footer bg' style={{ backgroundImage: `url(${bg})` }}>
         <div className='footer__container container'>
            <Newsletter />
            <div className='footer__body'>
               <div className='footer__column'>
                  <div className='footer__subtitle'>Contact Us</div>
                  <div className='footer__contact' style={{ display: 'flex', flexDirection: 'column' }}>
                     {footerLinks.map(link =>
                        <a key={link.id} href={link.href}>{link.name}</a>
                     )}
                  </div>

               </div>
               <div className='footer__column'>
                  <div className='footer__title'>Gerícht</div>
                  <Title title='' subtitle='"The best way to find yourself is to lose yourself in the service of others.”' />
                  <div className='footer__media'>
                     <a href=""><FiFacebook style={{ width: 24, height: 24 }} /></a>
                     <a href=""><FiInstagram style={{ width: 24, height: 24 }} /></a>
                     <a href=""><FiTwitter style={{ width: 24, height: 24 }} /></a>
                  </div>
                  <p className='footer__copy'>2021 Gerícht. All Rights reserved.</p>
               </div>
               <div className='footer__column'>
                  <div className='footer__subtitle'>Working Hours</div>
                  <p>Monday-Friday:</p>
                  <p>08:00 am -12:00 am</p>
                  <p>Saturday-Sunday:</p>
                  <p>07:00am -11:00 pm</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer