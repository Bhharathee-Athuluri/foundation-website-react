import React from 'react'
import styles from '../style';
import { photo7 } from '../assets'

const Certificates = () => {
  return (
    <section id="certificates" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col px-6`}>
            <div className="flex flex-row items-center py-[6px] px-4 bg-gray-gradient rounded-[10px] mb-2">
                <h1 className='flex-1 font-poppins font-semibold ss:text-[64px] text-[40px] text-white ss:leading-[70px] leading-[55px]'><span className='text-gradient'> Our Certificates </span></h1>
            </div>
            <p className={`${styles.paragraph} ml-2`}> "NayePankh Foundation" is a non governmental organisation with a strong desire to help the society and make it a better place for all, by doing everything in our power and to make our vision successful we would require your vital support. Service to mankind is the service to god. Let’s revolutionise the society together!. Here are our Government Registered Documents</p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} relative my-2 p-2`}>
            <img src={photo7} alt="Photo-7" className='w-[80%] h-[80%] relative z-[5]' />
        </div>
    </section>
  )
}

export default Certificates