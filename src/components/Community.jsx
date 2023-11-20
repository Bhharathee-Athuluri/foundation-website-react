import React from 'react'
import styles from '../style'
import { Forum, MissionValues, SuccessStories, OtherSocials, Testimonials, Upcoming} from './CommunityPage'
import { Navbar } from '../components'


const Community = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <MissionValues />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <Testimonials />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <SuccessStories />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <Forum />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <Upcoming />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <OtherSocials />
        </div>
    </div>
  )
}

export default Community