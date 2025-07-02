"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Quote, Phone, ArrowRight, User } from 'lucide-react'
import Link from 'next/link'

const galleryImages = [
  {
    src: "",
    title: "Kitchen Deep Clean",
    category: "Kitchen"
  },
  {
    src: "",
    title: "Bathroom Cleaning",
    category: "Bathroom"
  },
  {
    src: "",
    title: "Office Space",
    category: "Office"
  },
  {
    src: "",
    title: "Living Room",
    category: "Living Room"
  },
  {
    src: "",
    title: "Bedroom",
    category: "Bedroom"
  },
  {
    src: "",
    title: "Commercial Space",
    category: "Commercial"
  }
]

const testimonials = [
  {
    name: "Jennifer Thompson",
    location: "Palm Desert, CA",
    rating: 5,
    text: "Ana&apos;s team transformed my home completely! Every surface was spotless, and they used eco-friendly products that didn&apos;t leave any harsh chemical smells. I&apos;m a customer for life!"
  },
  {
    name: "Robert Davis",
    location: "Palm Springs, CA",
    rating: 5,
    text: "Professional, reliable, and thorough. Ana&apos;s Cleaning Service has been maintaining our office space for over a year, and the quality is consistently excellent."
  },
  {
    name: "Patricia Wilson",
    location: "La Quinta, CA",
    rating: 5,
    text: "I was amazed by the attention to detail. They cleaned areas I never even thought about! The team is friendly, efficient, and truly cares about their work."
  },
  {
    name: "Michael Chen",
    location: "Indio, CA",
    rating: 5,
    text: "After a kitchen renovation, Ana&apos;s team did an incredible deep clean. They removed all the construction dust and made everything sparkle. Highly recommend!"
  },
  {
    name: "Sarah Martinez",
    location: "Desert Hot Springs, CA",
    rating: 5,
    text: "Moving out cleaning service was exceptional. Ana&apos;s team helped us get our full deposit back by making the place look better than when we moved in!"
  },
  {
    name: "David Brown",
    location: "Rancho Mirage, CA",
    rating: 5,
    text: "Regular bi-weekly service has been a game-changer for our busy family. The team is trustworthy, and our house is always immaculate when we come home."
  }
]

export default function OurWorkPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Work Speaks for Itself
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the transformation we bring to homes and businesses throughout the Coachella Valley. 
              Every project showcases our commitment to excellence and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
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
              Before & After Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our portfolio of completed projects and see the incredible transformations we deliver.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    {image.src ? (
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-64 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <div className="text-center text-gray-500">
                          <div className="text-4xl mb-2">📷</div>
                          <p className="text-sm font-medium">Coming Soon</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="font-heading font-semibold text-lg mb-1">{image.title}</h3>
                        <p className="text-sm">{image.category}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-heading font-semibold text-lg text-gray-900 mb-1">
                      {image.title}
                    </h3>
                    <p className="text-primary text-sm font-medium">{image.category}</p>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our service.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-gray-300 mb-2" />
                    <p className="text-gray-600 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See Your Space Transformed?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied customers. Contact us today to schedule your cleaning service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 font-semibold border-2 border-white/20 hover:border-white/40">
                <Link href="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-3 border-white text-white hover:bg-white hover:text-primary shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 font-semibold bg-white/10 backdrop-blur-sm">
                <Link href="tel:+1-442-300-1987">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 