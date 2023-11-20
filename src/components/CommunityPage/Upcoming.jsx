import React from 'react';

const Upcoming = () => {
  const events = [
    {
      id: 1,
      title: 'Community Cleanup Drive',
      date: 'November 25, 2023',
      location: 'City Park',
      description: 'Join us for a community cleanup to keep our city clean and green!',
    },
    {
      id: 2,
      title: 'Fundraising Gala Dinner',
      date: 'December 10, 2023',
      location: 'Grand Ballroom, ABC Hotel',
      description: 'An evening of dinner and entertainment to raise funds for our cause.',
    },
    // Add more events as needed
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Upcoming;