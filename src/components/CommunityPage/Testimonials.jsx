import React from 'react'
import { profile_icon } from '../../assets';

const Testimonials = () => {
    const testimonials = [
      {
        id: 1,
        name: 'John Doe',
        role: 'Volunteer',
        quote:
          "The experience of volunteering with Nayepankh has been incredibly rewarding. I've seen the impact of our work firsthand.",
      },
      {
        id: 2,
        name: 'Anonymous',
        role: 'Beneficiary',
        quote:
          'I am grateful for the support I received from Nayepankh. Their help during the covid time really means a lot to a lot of people like me.',
      },
      {
        id: 3,
        name: 'John Doe',
        role: 'Volunteer',
        quote:
          "The experience of volunteering with Nayepankh has been incredibly rewarding. I've seen the impact of our work firsthand.",
      },
    ];
  
    return (
        <section className="py-12 bg-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                >
                  <img
                    src={profile_icon}
                    alt={`${testimonial.name}'s Picture`}
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <p className="text-lg text-gray-800 mb-4">{testimonial.quote}</p>
                  <p className="text-md font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
};

export default Testimonials