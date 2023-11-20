import React from 'react'
import './CommunityStyles.css'
import styles from '../style'
import { Forum, MissionValues, SuccessStories, OtherSocials, Testimonials, Upcoming} from './CommunityPage'
import { Navbar } from '../components'


const Community = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`{styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
        <MissionValues />
        <Testimonials />
        <SuccessStories />
        <Forum />
        <Upcoming />
        <OtherSocials />
    </div>
  )
}

export default Community