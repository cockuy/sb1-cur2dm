import React from 'react';
import { Package2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Package2 className="h-8 w-8 text-violet-400" />
              <span className="ml-2 text-xl font-bold text-white">SwiftWings</span>
            </div>
            <p className="text-gray-400">
              Next-generation logistics solutions for the modern world. Fast, reliable, and sustainable.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-violet-400 transition">Services</a></li>
              <li><a href="#features" className="hover:text-violet-400 transition">Features</a></li>
              <li><a href="#testimonials" className="hover:text-violet-400 transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-violet-400 transition">Track Package</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-violet-400" />
                <a href="mailto:hello@swiftwings.com" className="hover:text-violet-400 transition">
                  hello@swiftwings.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-violet-400" />
                <a href="tel:+1234567890" className="hover:text-violet-400 transition">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-violet-400" />
                <span>123 Innovation St, Tech City</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers!</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-violet-400"
              />
              <button className="w-full bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SwiftWings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}