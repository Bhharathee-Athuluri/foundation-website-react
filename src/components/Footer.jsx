import React from 'react'
import styles from '../style';
import { photo3 } from '../assets'

const Footer = () => {
  return (
    <section id="footer" className={`flex md:flex-row flex-col p-3`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row items-center py-[6px] px-4 bg-white rounded-[10px] mb-2">
            <h1 className='flex-1 font-poppins font-semibold ss:text-[44px] text-[30px] ss:leading-[40px] leading-[25px]'>Get in Touch</h1>
          </div>
          <ul className='list-none'>
            <li>career@nayepankh.com</li>
            <li>Calling: +91- 8318500748</li>
            <li>WhatsApp: +91-6306266557</li>
            <li>Office Address: 104A/279 P.Road Kanpur</li>
            <li>Pin Code: 208012</li>                                    
          </ul>
          </div>
          <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative p-3`}>
            <img src={photo3} alt="Photo-3" className='w-[70%] h-[70%] relative z-[5]' />
        </div>
      
    </section>
  )
}

export default Footer