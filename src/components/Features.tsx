import React from 'react';
import { Shield, MessageSquare, Truck } from 'lucide-react';

export default function Features() {
  return (
    <div id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-violet-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose SwiftWings?</h2>
          <p className="text-gray-600">Experience the future of logistics</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="relative">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Shield className="h-12 w-12 text-violet-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Secure Shipping</h3>
              <p className="text-gray-600">
                Your packages are protected with advanced tracking and insurance. 
                Rest easy knowing your items are safe! 🔒
              </p>
            </div>
          </div>

          <div className="relative lg:mt-12">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <MessageSquare className="h-12 w-12 text-violet-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Real-Time Updates</h3>
              <p className="text-gray-600">
                Track your deliveries in real-time with our advanced notification system.
                Stay in the loop 24/7! 📱
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Truck className="h-12 w-12 text-violet-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Eco-Friendly Fleet</h3>
              <p className="text-gray-600">
                Sustainable delivery solutions with our electric and hybrid vehicles.
                Green logistics for a better tomorrow! 🌱
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}