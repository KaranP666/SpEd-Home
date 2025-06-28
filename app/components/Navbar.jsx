import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
     <nav className="flex items-center justify-between px-6 py-4 border-b-2 border-yellow-400 bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
        {/* <div>
          <h1 className="text-lg font-semibold text-indigo-700 leading-none">SpEd@home</h1>
          <p className="text-xs text-gray-500 -mt-1">Every child enABLED</p>
        </div> */}
      </div>

      <div className="hidden md:flex space-x-6 text-sm text-gray-700">
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-indigo-600">
            Assessment
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.25 7.5l4.5 4.5 4.5-4.5" /></svg>
          </button>
        </div>
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-indigo-600">
            Coaching
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.25 7.5l4.5 4.5 4.5-4.5" /></svg>
          </button>
        </div>
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-indigo-600">
            Pricing
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.25 7.5l4.5 4.5 4.5-4.5" /></svg>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-6 text-sm">
        <Link href="#" className="text-gray-700 hover:text-indigo-600">About</Link>
        <Link href="#" className="text-gray-700 hover:text-indigo-600">Contact</Link>
        <span className="w-px h-4 bg-gray-300"></span>
        <Link href="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
        <Link href="/signup" className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium transition">Sign up</Link>
      </div>
    </nav>
  )
}

export default Navbar