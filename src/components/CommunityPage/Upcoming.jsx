import React from 'react';
import { events } from '../../constants';

const Upcoming = () => {
  return (
    <section className="py-8 mt-8 bg-gradient-to-r from-gray-300 to-slate-200 font-poppins px-4 rounded-lg w-fit">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-slate-100 rounded-lg shadow-md shadow-slate-500 p-6">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700 mb-2">
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