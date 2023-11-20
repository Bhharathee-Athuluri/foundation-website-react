import React from 'react'
import { testimonials } from '../../constants';

const Testimonials = () => {
    return (
        <section className="pt-8 bg-primary font-poppins">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-gradient">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-gradient p-6 rounded-lg shadow-md shadow-slate-600 flex flex-col items-center"
                >
                  <img
                    src={testimonial.profile}
                    alt={`${testimonial.name}'s Picture`}
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <p className="text-lg text-gray-100 mb-4">{testimonial.quote}</p>
                  <p className="text-md font-semibold text-teal-200">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
};

export default Testimonials