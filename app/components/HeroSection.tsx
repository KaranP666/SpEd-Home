// components/HeroSection.tsx
'use client'

// import { FaPhoneAlt, FaEnvelope, FaInstagram, FaViber } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-16 py-10 bg-white relative">
      
      <div className="max-w-xl mr-10">
        <h1 className="text-5xl font-bold text-[#1C1A4A] leading-tight">
          We’re <span className="text-pink-500">Online!</span>
        </h1>
        <h2 className="text-lg mt-4 font-semibold text-[#1C1A4A]">
          Personalized Therapy, Coaching & Learning —<br /> All From the Comfort of Your Home.
        </h2>
        <p className="mt-4 text-gray-600">
          Get personalized therapy, coaching, and learning programs for children with Autism, ADHD, and Learning Disabilities —
          all delivered online by certified professionals. Safe, structured, and designed to fit into your daily routine.
        </p>
      </div>

      <div className="bg-[#FDB813] text-[#1C1A4A] p-6 md:p-8 rounded-2xl w-full max-w-sm mb-10 md:mb-0">
        <h3 className="text-xl font-semibold mb-4">Book a Free Assessment</h3>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Child's name</label>
            <input
              type="text"
              placeholder="Francois Mercer"
              className="w-full rounded-full px-4 py-2 text-sm outline-none bg-amber-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              placeholder="9876543210"
              className="w-full rounded-full px-4 py-2 text-sm outline-none bg-amber-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="qwe@qwe.com"
              className="w-full rounded-full px-4 py-2 text-sm outline-none bg-amber-100"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 rounded-full transition"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* <div className="fixed right-4 top-1/3 space-y-4 z-50 hidden md:flex flex-col items-center">
        <a href="#" className="bg-yellow-400 p-3 rounded-full shadow-md text-white"><FaPhoneAlt /></a>
        <a href="#" className="bg-teal-400 p-3 rounded-full shadow-md text-white"><FaEnvelope /></a>
        <a href="#" className="bg-pink-500 p-3 rounded-full shadow-md text-white"><FaInstagram /></a>
        <a href="#" className="bg-purple-700 p-3 rounded-full shadow-md text-white"><FaViber /></a>
      </div> */}
    </section>
  )
}
