import React from 'react';
import { photo8, photo9, photo10 } from '../../assets';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      title: 'Spreading Smiles on Friendship Day',
      description:
        "Celebrating the magic of friendship with a heartwarming twist! At Nayepankh Foundation, we come together to share joy with underprivileged roadside children, lighting up their lives one smile at a time.",
      imageUrl: photo8, // Replace with the actual path to the image
    },
    {
      id: 2,
      title: 'Knowledge is Power',
      description:
        'Through our dedicated team of educators and volunteers, we work tirelessly to create safe and nurturing learning environments, where every child feels valued and empowered to reach their full potential. Together, we are rewriting the narratives and giving wings to their dreams.',
      imageUrl: photo9, // Replace with the actual path to the image
    },
    {
      id: 3,
      title: 'Feeding the Needy',
      description:
        'We firmly believe that no one should be deprived of a basic necessity like food. Through our feeding programs, we aim to break the cycle of poverty, nourish bodies, and inspire minds. We strive to create a world where everyone has equal access to nutritious meals and the opportunity to thrive.',
      imageUrl: photo10, // Replace with the actual path to the image
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
