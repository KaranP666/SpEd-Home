'use client'

import Image from 'next/image'
import { testimonials } from '../constant/index'

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-[#1C1A4A] mb-2">What Parents Say About Us</h2>
      <p className="text-gray-500 mb-10">Hear How We're Making a Difference in Their Lives.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 text-left relative"
          >
            <div className="absolute -top-6 left-6">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full border-2 border-white shadow-md"
              />
            </div>
            <div className="pl-16">
              <h4 className="font-semibold text-md text-[#1C1A4A]">{testimonial.name}</h4>
              <div className="flex items-center gap-1 my-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    <svg
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.946a1 1 0 00-.364-1.118l-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.285-3.946z" />
                    </svg>
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 italic mt-2">"{testimonial.review}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
