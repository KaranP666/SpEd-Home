import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
      <section className="bg-white py-16 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-[#1C1A4A] text-center mb-2">
          Your Child’s Journey Starts Here
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Fill in your details and our team will connect with you to understand your needs and share how we can help.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <input
            type="text"
            placeholder="Francisco Andrade"
            className="border shadow-md p-3 rounded-md outline-none bg-amber-50"
          />
          <textarea
            placeholder="Hi..."
            className="border shadow-md p-3 rounded-md outline-none bg-amber-50 md:row-span-2 h-full min-h-[100px]"
          />
          <input
            type="email"
            placeholder="hello@reallygreatsite.com"
            className="border shadow-md p-3 rounded-md outline-none bg-amber-50"
          />
          <input
            type="tel"
            placeholder="+123-456-7890"
            className="border shadow-md p-3 rounded-md outline-none bg-amber-50"
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-md uppercase flex items-center gap-2 float-right"
            >
              Submit <span className="text-sm">➤</span>
            </button>
          </div>
        </form>
      </section>

    <div className="flex justify-center">
          <footer className="bg-[#F62085] w-[1000px] text-white pt-12 pb-6 px-6 md:px-16 rounded-t-3xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="max-w-md">
            <div className="mb-4 rounded-xl bg-amber-50 w-[100px] p-1.5">
             <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
            </div>
            <p className="mb-4">Stay in the know by subscribing to our newsletter below.</p>
            <div className="flex border border-white rounded-full overflow-hidden max-w-sm">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 text-black outline-none bg-amber-50"
              />
              <button className="bg-white text-[#F62085] p-3">
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm mt-8 md:mt-0">
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="space-y-1">
                <li>Home</li>
                <li>About</li>
                <li>Programs</li>
                <li>Blogs</li>
                <li>Solutions</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <ul className="space-y-1">
                <li>Contact Form</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>T&amp;C</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Social</h4>
              <ul className="space-y-1">
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/30 pt-4 text-xs flex flex-col md:flex-row justify-between items-center text-white">
          <span>© SpEd@home. All Rights Reserved 2025</span>
          <span className="mt-2 md:mt-0">Terms & Conditions</span>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Footer