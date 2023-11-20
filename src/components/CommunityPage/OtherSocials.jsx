import React from 'react';

const OtherSocials = () => {
  const socials = [
    {
      id: 1,
      name: 'Facebook',
      icon: 'path_to_facebook_icon', // Replace with the actual path to the Facebook icon
      link: 'https://www.facebook.com/yourNGO',
    },
    {
      id: 2,
      name: 'Twitter',
      icon: 'path_to_twitter_icon', // Replace with the actual path to the Twitter icon
      link: 'https://twitter.com/yourNGO',
    },
    // Add more social platforms as needed
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Follow Us on Social Media</h2>
        <div className="flex items-center justify-center space-x-6">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
            >
              <img src={social.icon} alt={social.name} className="h-8 w-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherSocials;