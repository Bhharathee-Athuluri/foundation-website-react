import React from 'react'
import styles from '../style'
import { Navbar, Home, About, Certificates, Recognition, Donate, Footer } from '../components'

const CompletePage = () => {
  return (
    <div>
        <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`{styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className='`${styles.boxWidth}`'>
          <Home />
        </div>
      </div>

      <div className={`bg-primary ${styles.padingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </div>

      <div className={`bg-primary ${styles.padingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Certificates />
        </div>
      </div>

      <div className={`bg-primary ${styles.padingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Recognition />
        </div>
      </div>

      <div className={`bg-primary ${styles.padingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Donate />
        </div>
      </div>

      <div className={`bg-white ${styles.padingX} ${styles.flexStart}`}>
        <div className="mx-2 my-2 flex justify-between">
          <Footer />
        </div>
      </div>
    </div>
    </div>
  )
}

export default CompletePage