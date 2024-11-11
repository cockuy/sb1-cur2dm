import React from 'react';
import { ChevronRight, Package2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 -z-10" />
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 -z-10">
        <div className="h-full w-full bg-gradient-to-br from-violet-600/10 to-indigo-600/10 backdrop-blur-3xl transform rotate-12 translate-x-1/3" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0 relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-700 rounded-full mb-6 text-sm font-medium">
              <Package2 className="h-4 w-4 mr-2" />
              Drone Delivery Available 24/7
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
                Future of Delivery
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Is in the Sky
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Experience lightning-fast deliveries with our autonomous drone fleet. 
              AI-powered routing and real-time tracking, straight to your doorstep! 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="relative overflow-hidden border-2 border-violet-600 text-violet-600 px-8 py-3 rounded-full transition-all duration-300 hover:text-white group">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 -z-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80"
                alt="Drone Delivery in Action"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Stats Cards */}
            <div className="absolute -bottom-6 -right-6 flex gap-4">
              <div className="bg-white p-4 rounded-xl shadow-lg backdrop-blur-sm bg-white/90">
                <p className="text-sm font-medium text-gray-600">Active Drones</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">500+</p>
              </div>
              <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 rounded-xl shadow-lg text-white">
                <p className="text-sm font-medium">Delivery Success</p>
                <p className="text-2xl font-bold">99.9%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}