import React from 'react'
import styles from '../style'
import DonateNow from './DonateNow'
import { photo1 } from '../assets'

const Home = () => {
  return (
  <section id="home" className={`w-full flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 flex-col px-6`}>
      <div className="w-fit flex flex-row items-center py-[6px] px-4 bg-gray-gradient rounded-[10px] mb-2">
        <h1 className='flex-1 font-poppins font-semibold ss:text-[64px] text-[40px] text-white ss:leading-[70px] leading-[55px]'>It's that easy to <br />bring a
          <span className='text-gradient'> Smile </span><br />on Their Faces</h1>
      </div>

      <div className="w-fit flex flex-row items-center py-[6px] px-4 bg-gray-gradient rounded-[10px] mb-2">
        <p className= {`${styles.paragraph} ml-2`}>
          We don't ask for much, <br /> just help us with what you can - <br /> Be it  <span className='text-white'> Money</span>
        , 
        <span className='text-white'> Skill </span>
        or Your
        <span className='text-white'> Time </span>
        </p>
      </div>

      <div className='flex md:mr-4 mr-0 p-4'>
        <DonateNow />
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h3 className='flex-1 font-poppins font-semibold ss:text-[30px] text-[24px] text-white ss:leading-[40px] leading-[32px]'>UP GOVT.  | 80G & 12A Registered</h3>
      </div>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} self-center relative p-3`}>
        <img src={photo1} alt="Photo-1" className='w-[70%] h-[70%] relative z-[5]' />
    </div>
  </section>
  )
}

export default Home