import React from 'react'
import styles from '../style';
import { photo3 } from '../assets'

const About = () => {
  return (
    <section id="about" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-gray-gradient rounded-[10px] mb-2">
            <h1 className='flex-1 font-poppins font-semibold ss:text-[64px] text-[40px] text-white ss:leading-[70px] leading-[55px]'><span className='text-gradient'> About Us </span><br />How it Started?</h1>
      </div>
        <p className={`${styles.paragraph} ml-2`}> As we all know, 2020 was a year the world was striving to survive the global pandemic of covid-19. During these dire times we felt an urge to make an impact with whatever we had, and so we tried!! We tried to uplift the underprivileged and help the needy with all our resources and material we could arrange, it was tough but we didn't lose our hope and kept going in order to bring a change everyone was expecting the bigger authorities to bring in the societies on smaller levels. We started off as a group of bunch of highschoolers but now are a team of numerous people from different parts of the city and state! 28th March 2021, the day we officially landed on the ground to serve our duties as the youth of the most rapidly progressing nation afterall, the main hope of a nation lies in the arms of its youth.</p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative p-3`}>
        <img src={photo3} alt="Photo-3" className='w-[70%] h-[70%] relative z-[5]' />
    </div>
    </section>
  )
}

export default About