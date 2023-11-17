import React from 'react'
import styles from '../style';
import { photo3 } from '../assets'

const Footer = () => {
  return (
    <section id="footer" className={`flex md:flex-row flex-col p-3`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 items-center sm:px-16 px-6`}>
          <div className="flex flex-row py-[6px] px-4 rounded mb-2">
            <h1 className='flex-1 font-poppins font-semibold ss:text-[36px] text-[40px] ss:leading-[40px] leading-[25px]'>Get in Touch</h1>
          </div>
          <ul className='list-none font-poppins whitespace-nowrap p-2'>
            <li><b>Mail us at:</b> <a href = "mailto: career@nayepankh.com">career@nayepankh.com</a></li>
            <li><b>Calling:</b> +91- 8318500748</li>
            <li><b>WhatsApp:</b> +91-6306266557</li>
            <li><b>Our Office Address:</b> 104A/279, P.Road, Kanpur</li>
            <li><b>Pin Code:</b> 208012</li>                                    
          </ul>
          </div>
          <div className={`flex-1 flex ${styles.flexCenter} relative p-2`}>
            <img src={photo3} alt="Photo-3" className='w-[75%] h-[75%] relative z-[6]' />
        </div>
      
    </section>
  )
}

export default Footer