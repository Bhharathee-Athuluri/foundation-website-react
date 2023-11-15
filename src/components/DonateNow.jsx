import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const DonateNow = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[60px] rounded-lg bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-lg`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] text-gradient'>Donate Now</p>
          <img src={arrowUp} alt="arrowMark" className='w-[23px] h-[23px] object-contain' />
        </div>
      </div>
    </div>
  )
}

export default DonateNow