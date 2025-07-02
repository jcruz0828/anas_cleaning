"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import * as Accordion from '@radix-ui/react-accordion'
import { CheckCircle, Star, Phone, ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const pricingPlans = [
  {
    name: "Basic Clean",
    price: "$100-150",
    frequency: "One-time or Weekly",
    description: "Essential cleaning for maintenance and upkeep",
    features: [
      "All rooms dusted and vacuumed",
      "Kitchen counters & appliances cleaned",
      "Bathrooms sanitized",
      "Floors mopped",
      "Trash removal",
      "Basic window cleaning"
    ],
    popular: false
  },
  {
    name: "Airbnb Turnover",
    price: "$100-300",
    frequency: "Per Turnover",
    description: "Fast, thorough cleaning between guest stays",
    features: [
      "All rooms deep cleaned & sanitized",
      "Kitchen fully cleaned & restocked",
      "Bathrooms deep sanitized",
      "Floors vacuumed & mopped",
      "Trash removal & fresh bags",
      "Basic amenities restocked",
      "Same-day service available",
      "Guest-ready inspection"
    ],
    popular: true
  },
  {
    name: "Deep Property Clean",
    price: "$250-400",
    frequency: "Weekly or Bi-weekly", 
    description: "Comprehensive cleaning for rental properties",
    features: [
      "Everything in Airbnb Turnover",
      "Inside appliances deep cleaned",
      "Baseboards and trim detailed",
      "Light fixtures and ceiling fans",
      "Cabinet fronts and interiors",
      "Window cleaning inside/out",
      "Door frames and handles sanitized",
      "Property inspection report"
    ],
    popular: false
  },
  {
    name: "Premium Property Service",
    price: "$350-550",
    frequency: "Monthly or As Needed",
    description: "Complete property maintenance and deep cleaning",
    features: [
      "Everything in Deep Property Clean",
      "Inside all cabinets and drawers",
      "All appliances inside/out detailed",
      "Closet organization & cleaning",
      "Outdoor space maintenance",
      "Touch-up cleaning & minor repairs",
      "Full property condition report",
      "Priority booking & 24hr availability"
    ],
    popular: false
  }
]

const faqItems = [
  {
    question: "What's included in a basic cleaning service?",
    answer: "Our basic cleaning includes dusting all surfaces, vacuuming carpets and rugs, mopping hard floors, cleaning bathrooms (toilet, sink, shower/tub, mirror), kitchen cleaning (counters, appliances, sink), and trash removal."
  },
  {
    question: "What's included in an Airbnb turnover cleaning?",
    answer: "Our Airbnb turnover service includes complete sanitization of all rooms, bathroom deep cleaning, kitchen restocking, trash removal, floor cleaning, and basic amenity restocking. We can arrange existing linens if provided. We ensure your property is guest-ready."
  },
  {
    question: "How quickly can you clean between guest checkouts?",
    answer: "We specialize in same-day turnovers and can typically complete an Airbnb cleaning within 2-3 hours, depending on property size. We offer flexible scheduling to accommodate tight checkout/checkin windows."
  },
  {
    question: "Do you provide linens and towels?",
    answer: "No, we do not provide linens and towels. However, we can change and arrange existing linens if provided by the property owner. We focus on deep cleaning and sanitization to ensure your property is guest-ready."
  },
  {
    question: "Are you insured for rental property cleaning?",
    answer: "Yes, Ana&apos;s Cleaning Service is fully insured and bonded with specialized coverage for rental properties. We carry liability insurance and worker&apos;s compensation insurance for your complete protection."
  },
  {
    question: "What if guests complain about cleanliness?",
    answer: "We guarantee our work. If a guest raises cleanliness concerns, contact us immediately and we'll return to address any issues at no charge. We maintain high standards to protect your property ratings."
  },
  {
    question: "Do you offer bulk pricing for multiple properties?",
    answer: "Absolutely! We offer discounted rates for property managers and hosts with multiple units. Contact us to discuss volume pricing and customized service packages for your portfolio."
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer: "Yes! We bring all necessary cleaning supplies and equipment. We use eco-friendly, non-toxic products that are safe for your family and pets. If you have specific product preferences, we're happy to use your supplies."
  },
  {
    question: "Can you coordinate with my property management system?",
    answer: "Yes, we work with many property managers and can integrate with your booking calendar. We can coordinate cleaning schedules based on your checkout/checkin times and guest bookings."
  },
  {
    question: "What areas do you serve?",
         answer: "We proudly serve the Coachella Valley including Palm Springs, Palm Desert, La Quinta, Indio, Desert Hot Springs, Rancho Mirage, and surrounding areas. We specialize in vacation rental properties throughout the region."
  }
]

export default function PricingPage() {
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
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Cleaning Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From basic home cleaning to specialized Airbnb turnovers and rental property management. 
              Premium service with transparent, competitive pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Our Cleaning Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from basic home cleaning to specialized Airbnb and rental property services. 
              Pricing based on property size, service type, and frequency requirements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                <Card className={cn(
                  "h-full",
                  plan.popular ? "border-primary shadow-lg scale-105" : ""
                )}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                    <CardDescription className="text-gray-600">
                      {plan.frequency}
                    </CardDescription>
                    <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <Link href="/contact">
                        Get Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Need a custom plan? We offer flexible pricing for multiple properties, regular schedules, and specialized requirements.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link href="tel:+1-442-300-1987">
                <Phone className="mr-2 w-5 h-5" />
                Call for Custom Quote
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our cleaning services.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion.Root type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border"
                >
                  <Accordion.Trigger className="flex justify-between items-center w-full px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none group">
                    <span>{item.question}</span>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {item.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation quote tailored to your specific needs.
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
                  +1-442-300-1987
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 