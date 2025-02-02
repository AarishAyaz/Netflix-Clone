import React from 'react'
import { useState } from 'react'
import Netflixlogo from '../assets/Netflix.png'



const HeroSection = () => {

  return (
   
   <div className='bg-[url(./assets/Background.jpg)]  h-screen w-screen  '>
        <div className="absolute inset-0 bg-gray-900 opacity-85  h-screen w-screen"></div>
      <header className="absolute inset-x-0 top-0">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className=" p-1.5 min-h-10 ">
              <span className="sr-only">Netflix</span>
              <img 
                alt=""
                src={Netflixlogo}
                className="h-15 w-auto ml-30"
              />
            </a>
          </div>
         
       
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-md/6 font-semibold rounded-md mr-80 min-h-2 min-w-18 text-center text-xs p-2 bg-red-600 text-white">
              Sign in <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 ">

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        
          <div className="text-center mt-15">
            <h1 className="text-6xl font-extrabold tracking-tight text-balance text-white ">
            Unlimited movies, TV shows, and more
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
                 Starts at Rs 250. Cancel anytime.
            </p>
            <p className='mt-8 text-md font-medium text-pretty  text-white'>
                 Ready to watch? Enter your email to create or restart your membership.

            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <input className='h-13 w-100 p-5 text-white border-white border-2'
              type='email'
              placeholder='Email address'
              />
              <a
                href="#"
                className="rounded-md bg-red-600 p-5 text-sm font-semibold text-center h-14 w-50 text-white shadow-xs hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get started 
              </a>
              
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
    
  )
}



export default HeroSection