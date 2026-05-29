import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSkype } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='w-full'>
      
      <div className='w-full bg-[#EDF6F5] border-b border-[#E9E9E9] pt-16 pb-12'>
        <div className='w-[90%] md:w-[85%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6'>
          {/* Company */}
          <div>
            <h3 className='font-bold text-lg mb-5'>Company</h3>
            <ul className='flex flex-col gap-3 text-[#777777]'>
              <li><a href='#' className='hover:text-[#0BA8A7]'>Pricing</a></li>
              <li><a href='#' className='hover:text-[#0BA8A7]'>Quick Start</a></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className='font-bold text-lg mb-5'>Product</h3>
            <ul className='flex flex-col gap-3 text-[#777777]'>
              <li><a href='#' className='hover:text-[#0BA8A7]'>Features</a></li>
              <li><a href='#' className='hover:text-[#0BA8A7]'>Platform</a></li>
              <li><a href='#' className='hover:text-[#0BA8A7]'>Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='font-bold text-lg mb-5'>Support</h3>
            <ul className='flex flex-col gap-3 text-[#777777]'>
              <li><a href='#' className='hover:text-[#0BA8A7]'>FAQ</a></li>
              <li><a href='#' className='hover:text-[#0BA8A7]'>Privacy Policy</a></li>
              <li><a href='#' className='hover:text-[#0BA8A7]'>Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Logo + about */}
          <div className='col-span-2 md:col-span-1'>
            <img src='https://themewagon.github.io/bigspring/images/logo.png' alt='Big Spring' className='h-9 mb-4' />
            <p className='text-[#777777] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consjat tristique eget amet, tempus eu at cttur.</p>
            <div className='flex gap-3'>
              <a href='#' className='w-9 h-9 rounded-full border border-[#0BA8A7] text-[#0BA8A7] flex items-center justify-center hover:bg-[#0BA8A7] hover:text-white transition-all'>
                <FaFacebookF className='w-4 h-4' />
              </a>
              <a href='#' className='w-9 h-9 rounded-full border border-[#0BA8A7] text-[#0BA8A7] flex items-center justify-center hover:bg-[#0BA8A7] hover:text-white transition-all'>
                <FaTwitter className='w-4 h-4' />
              </a>
              <a href='#' className='w-9 h-9 rounded-full border border-[#0BA8A7] text-[#0BA8A7] flex items-center justify-center hover:bg-[#0BA8A7] hover:text-white transition-all'>
                <FaLinkedinIn className='w-4 h-4' />
              </a>
              <a href='#' className='w-9 h-9 rounded-full border border-[#0BA8A7] text-[#0BA8A7] flex items-center justify-center hover:bg-[#0BA8A7] hover:text-white transition-all'>
                <FaSkype className='w-4 h-4' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright*/}
      <div className='w-full bg-[#EDF6F5] py-5'>
        <div className='w-[90%] mx-auto text-center text-[#777777] text-sm'>
          Designed and Developed By <span className='text-[#0BA8A7]'>Themefisher</span> • Distributed by <span className='text-[#0BA8A7]'>ThemeWagon</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
