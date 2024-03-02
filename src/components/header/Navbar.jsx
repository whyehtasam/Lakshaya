import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="bg-white ">
  <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
    <header className="flex items-center justify-between py-4 md:py-6">
      
      <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" className="w-6 h-auto text-red-800" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>

        Lakshaya
      </a>
      

      
      <nav className="hidden gap-12 lg:flex">
        <ul className="hidden gap-12 lg:flex">
        <li  className="text-base font-semibold text-red-700 transition duration-100 hover:text-red-500 ">Courses</li>
        <li  className="text-base font-semibold text-red-700 transition duration-100 hover:text-red-500 ">Residential Program</li>
        <li  className="text-base font-semibold text-red-700 transition duration-100 hover:text-red-500 ">Result</li>
        <li  className="text-base font-semibold text-red-700 transition duration-100 hover:text-red-500 ">Pay Fee</li>
        <li  className="text-base font-semibold text-red-700 transition duration-100 hover:text-red-500 ">Resources</li>
        <li  className="text-base font-semibold text-red-700 transition duration-100 hover:text-red-500 ">About Us</li>
        </ul>
        
      </nav>
      

      
      <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
        <a href="#" className="inline-block border-red-700 border-2 px-4 py-3 text-sm font-semibold text-center text-red-700 transition duration-100 rounded-lg  hover:text-red-500 focus-visible:ring md:text-base">Contact Us</a>

        <a href="#" className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-red-700 rounded-lg outline-none ring-indigo-300 hover:bg-red-500 focus-visible:ring md:text-base">Sign up</a>
      </div>

      <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>

        Menu
      </button>
      
    </header>

    
   
    
  </div>
</div>
    </div>
  )
}

export default Navbar