import React from 'react';
import { socials } from '../../constants';

const OtherSocials = () => {
  return (
    <section className="py-8 px-4 m-4 bg-black-gradient rounded-lg font-poppins">
      <div className="container mx-auto">
        <h2 className="text-[24px] font-bold text-gradient mb-4">Do Follow Us on Social Media</h2>
        <div className="flex items-center justify-center space-x-6">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300"
            >
              <img src={social.icon} alt={social.name} className="h-9 w-9" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherSocials;