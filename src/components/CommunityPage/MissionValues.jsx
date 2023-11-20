import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { photo2, photo5, photo6 } from '../../assets';

const MissionValues = () => {
  return (
    <section className="pt-8 font-poppins">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gradient text-center mb-8">Our Mission and Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg text-gray-100 leading-relaxed bg-black-gradient rounded-lg p-4">
              "NayePankh Foundation" is a non governmental organisation with a strong desire to help the society and make it a better place for all, by doing everything in our power and to make our vision successful we would require your vital support. Service to mankind is the service to god.  We firmly beleive this and are committed to fostering positive change in the world.
            </p>
            </div>

            <div className="flex flex-col justify-center items-center">
        <Carousel showArrows={true} showThumbs={false}>
          <div>
            <img src={photo2} alt="Image 1" />
          </div>
          <div>
            <img src={photo5} alt="Image 2" />
          </div>
          <div>
            <img src={photo6} alt="Image 3" />
          </div>
        </Carousel>
      </div>
      </div>
      </div>
    </section>
  )
}

export default MissionValues