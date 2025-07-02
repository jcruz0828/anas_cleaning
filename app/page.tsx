"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Sparkles, Shield, Clock, Star, Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    icon: Sparkles,
    title: "Airbnb & Vacation Rentals",
    description: "Specialized cleaning for short-term rentals with fast turnovers and guest-ready standards.",
    features: ["Same-day service available", "Complete sanitization", "Kitchen restocking", "Guest-ready inspection"]
  },
  {
    icon: Shield,
    title: "Residential Cleaning", 
    description: "Professional home cleaning services from basic maintenance to deep cleaning.",
    features: ["Weekly or bi-weekly service", "Kitchen & bathroom focus", "Eco-friendly products", "Flexible scheduling"]
  },
  {
    icon: Clock,
    title: "Commercial & Office",
    description: "Reliable commercial cleaning to maintain professional work environments.",
    features: ["Office spaces", "Restroom sanitization", "Floor care", "Trash removal"]
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Airbnb Host - Palm Springs",
    rating: 5,
    text: "Ana&apos;s turnover service is incredible! My guests always comment on how spotless the property is. My 5-star ratings have improved significantly!"
  },
  {
    name: "Mike Rodriguez", 
    location: "Homeowner - Palm Desert",
    rating: 5,
    text: "Ana cleans our home bi-weekly and it&apos;s always perfect. Professional, reliable, and uses eco-friendly products. Couldn&apos;t be happier!"
  },
  {
    name: "Lisa Chen",
    location: "Office Manager - La Quinta",
    rating: 5,
    text: "Our office has never been cleaner! Ana&apos;s team is thorough, punctual, and maintains a professional environment for our employees and clients."
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-primary/5 to-primary/10 py-16 sm:py-24 lg:py-36 overflow-hidden">
        {/* Simplified background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/15 to-primary/25 rounded-full blur-lg opacity-60" />
          <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full blur-lg opacity-50" />
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full blur-xl opacity-40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 lg:mb-12 leading-tight sm:leading-relaxed">
                <span className="block">Spotless Every Time</span>
                <span className="block text-primary mt-1 sm:mt-2">
                  with Ana&apos;s Cleaning
                </span>
              </h1>
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Professional cleaning services for homes, offices, and vacation rentals. 
                Specializing in Airbnb turnovers with same-day service available.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button asChild size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 h-12 sm:h-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 font-semibold border-2 border-primary/20 hover:border-primary/40">
                    <Link href="/contact">
                      Get Free Quote
                      <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 h-12 sm:h-auto border-3 border-primary text-primary hover:bg-primary hover:text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 font-semibold bg-white/90 backdrop-blur-sm">
                    <Link href="tel:+1-442-300-1987">
                      <Phone className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
                      Call Now
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-600">
                {[
                  "Airbnb Specialization",
                  "Eco-Friendly Products", 
                  "Same-Day Service"
                ].map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/15 rounded-3xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <Image
                    src="/landing.jpg"
                    alt="Professional cleaning supplies and spray bottle"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/25 to-primary/35 rounded-full opacity-60" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-primary/15 to-primary/25 rounded-full opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From residential homes to vacation rentals and commercial spaces - we provide comprehensive cleaning solutions. 
              Specializing in Airbnb turnovers with expert service for all property types.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              From Airbnb hosts to homeowners and business owners - hear from satisfied customers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.location}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
        {/* Static background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/8 rounded-full blur-lg opacity-50" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/4 rounded-full blur-xl opacity-40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="font-heading text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready for Professional Cleaning?
            </motion.h2>
            <motion.p 
              className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Whether you&apos;re an Airbnb host, homeowner, or business owner - experience the Ana&apos;s difference. Get your free quote today!
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="text-lg px-8 py-3 bg-white text-primary hover:bg-white hover:text-primary/90 shadow-2xl hover:shadow-3xl border-2 border-white/20 hover:border-white/40 font-semibold transition-all duration-300 transform hover:-translate-y-1">
                  <Link href="/contact">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-3 border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-md shadow-2xl hover:shadow-3xl font-semibold transition-all duration-300 transform hover:-translate-y-1">
                  <Link href="tel:+1-442-300-1987">
                    <Phone className="mr-2 w-5 h-5" />
                    +1-442-300-1987
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 