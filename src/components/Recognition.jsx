import React from 'react'
import styles from '../style';
import { placeholder } from '../assets'

const Recognition = () => {
  return (
    <section id="recognition" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-gray-gradient rounded-[10px] mb-2">
            <h1 className='flex-1 font-poppins font-semibold ss:text-[64px] text-[40px] text-white ss:leading-[70px] leading-[55px]'><span className='text-gradient'> Our Work </span><br />How it's going'?</h1>
      </div>
        <p className={`${styles.paragraph} ml-2`}> Nayepankh foundation was initiated to bring a change and help people during the tough times of Covid. Later in the year, the NGO started to expand their operations and provide help to a wider section of the society. With this revamped vision, the NGO acquired the name of NayePankh - giving wings to uplift the underprivileged section of our society. NayePankh is one of the eminent NGOs espoused in providing food, sanitary napkins, clothes, educating underprivileged sectors of our society for the better future. Till date we have helped more than two lakhs of people. Although this seems quite a big achievement, but our goal is still not complete, therefore we're continuing more with hustle. When lockdown was hitting hard, we took a decision and now we are a 12A and 80G certified NGO (that means if someone donates to NayePankh they will get a relief of 50%in income tax). The most striking feature about us is that we are completely led by the youths of our country, many of whom are still in their colleges and schools. We are on a mission to make this earth a better place to live for all creatures. We are here as 'BADALTE BHARAT KI NAYI TASVEER'!!.</p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative p-3`}>
        <img src={placeholder} alt="Placeholder Image" className='w-[80%] h-[50%] relative z-[5]' />
    </div>
    </section>
  )
}
export default Recognition