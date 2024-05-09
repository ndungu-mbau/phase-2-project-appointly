import React from 'react'
import Image from './images/resort1.jpeg'

function Navbar() {
  return (
    <>
    <div>
      <nav className = "bg-green-800 h-36 flex" >
        <div className ='text-white text-5xl pt-10 pl-14 font-semibold'>
        <h1>Inter Resort</h1>
        </div>
        <div className="pt-11 pl-96">
          <button className = "text-white text-2xl border-2 border-white mr-20 px-8 py-1 rounded-full hover:bg-green-500">Login</button>
          <button className = "text-white text-2xl border-2 border-white px-8 py-1  rounded-full hover:bg-green-500">Sign Up</button>
        </div>
      </nav>
    </div>
    <section className ="bg-white dark:bg-gray-900 h-screen pt-12">
    <div className ="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className ="mr-auto place-self-center lg:col-span-7">
            <h1 className ="max-w-2xl mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Escape to Paradise at Inter Resort</h1>
            <p className ="max-w-2xl mb-10 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Inter Resort is not just a vacation destination ; it is an experience designed to rejuvenate your Mind , Body , and Soul . Nestled amidst [ Pristine beaches, Breathtaking mountains ] , 
            we offer luxurious accommodations , exceptional service , and a plethora of activities to cater to every desire . 
            Whether you crave adventure , relaxation , or family fun , Inter Resort provides the perfect setting to create unforgettable memories . 
            We go beyond just a stay ; we aim to craft a transformative escape that leaves you feeling refreshed and inspired.
            </p>
             <a href="#" className ="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mr-10">
                Login
            </a>
            <a href="#" className ="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Sign Up
            </a> 
        </div>
        <div className ="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={Image} alt="Inter Resort" className = "rounded-lg" />
        </div>                
    </div>
</section>

    </>
  )
}

export default Navbar
