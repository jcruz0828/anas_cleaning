import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-heading font-semibold text-lg sm:text-xl">
                Ana's Cleaning Service
              </span>
            </div>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              Professional cleaning services for homes, offices, and vacation rentals in the Coachella Valley. 
              Specializing in Airbnb turnovers with eco-friendly products and reliable service.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0">
              <a
                href="tel:+1-442-300-1987"
                className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1-442-300-1987</span>
              </a>
              <a
                href="mailto:anat34859@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors text-sm sm:text-base break-all"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>anat34859@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-gray-300 hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Airbnb & Vacation Rentals</span>
              </li>
              <li>
                <span className="text-gray-300">Residential Cleaning</span>
              </li>
              <li>
                <span className="text-gray-300">Commercial & Office</span>
              </li>
              <li>
                <span className="text-gray-300">Deep Cleaning</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Ana's Cleaning Service. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 