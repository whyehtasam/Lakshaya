import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="bg-white ">
  <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
    <header className="flex items-center justify-between py-4 md:py-6">
      <Link to='/'><a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" className="w-6 h-auto text-red-800" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>

        Lakshaya
      </a></Link>
      
      

      
      <nav className="hidden lg:gap-12 lg:flex">
        <ul className="hidden lg:gap-[4vw] lg:flex">

        <Link to='/courses'> 
        <li  className="text-sm font-semibold text-black transition duration-100 hover:text-red-800 ">Courses</li>
        </Link>
        <Link to='/residentialProgram'> 
        <li  className="text-sm font-semibold text-black transition duration-100 hover:text-red-800 ">Residential Program</li>
        </Link>
        <Link to='/feePayment'> 
        <li  className="text-sm font-semibold text-black transition duration-100 hover:text-red-800 ">Fee Payment</li>
        </Link>
        <Link to='/resources'> 
        <li  className="text-sm font-semibold text-black transition duration-100 hover:text-red-800 ">Resourses</li>
        </Link>
        <Link to='/aboutUs'> 
        <li  className="text-sm font-semibold text-black transition duration-100 hover:text-red-800 ">About Us</li>
        </Link>
        
        </ul>
        
      </nav>
      

      
      {/* <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
        <Link to='contactUs'> <a href="#" className="inline-block border-red-800 border-2 px-4 py-3 text-sm font-semibold text-center text-black transition duration-100 rounded-lg  hover:text-red-800 focus-visible:ring md:text-sm">Contact Us</a></Link>

        <Link to='signUp'><a href="#" className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-red-800 rounded-lg outline-none ring-indigo-300 hover:bg-red-500 focus-visible:ring md:text-sm">Sign up</a></Link>
        
      </div> */}
      <ul className='lg:flex gap-2.5 font-semibold text-sm hidden '>
        <li className='rounded-md border-2 border-red-800 text-red-800  py-2 px-4'>Contact Us</li>
        <li className='py-2 px-4 rounded-md bg-red-800 text-white'>Sign Up</li>
      </ul>

      <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-sm lg:hidden">
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