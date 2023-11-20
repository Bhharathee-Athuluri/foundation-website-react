import React from 'react';
import { successStories } from '../../constants';

const SuccessStories = () => {
  return (
    <section className="pt-8 bg-primary font-poppins">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gradient mb-8">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div key={story.id} className="bg-gradient-to-r from-gray-300 to-slate-200 rounded-lg shadow-md shadow-slate-500 overflow-hidden">
              <img src={story.imageUrl} alt={story.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-700">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
