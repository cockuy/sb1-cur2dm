import React from 'react';
import { Plane, Clock, Globe2, Building2 } from 'lucide-react';

const services = [
  {
    icon: <Plane className="h-8 w-8 text-violet-600" />,
    title: "Aerial Delivery",
    description: "Ultra-fast drone delivery straight to your location! 🛸",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: <Building2 className="h-8 w-8 text-violet-600" />,
    title: "Commercial Solutions",
    description: "Automated drone fleet for businesses of all sizes. 🏢",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: <Clock className="h-8 w-8 text-violet-600" />,
    title: "24/7 Service",
    description: "Our drones operate day and night, rain or shine. ⏰",
    gradient: "from-indigo-500 to-violet-500"
  },
  {
    icon: <Globe2 className="h-8 w-8 text-violet-600" />,
    title: "City-Wide Coverage",
    description: "Comprehensive aerial delivery network. 🌍",
    gradient: "from-violet-500 to-indigo-500"
  }
];

export default function Services() {
  return (
    <div id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
            Our Services
          </h2>
          <p className="text-gray-600">Revolutionary drone delivery at your service</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-white border border-gray-100 hover:border-violet-200 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity rounded-xl"
                   style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r w-0 group-hover:w-full transition-all duration-300 rounded-b-xl"
                   style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}