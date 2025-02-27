import React from 'react'
import { FaWhatsappSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='max-w-[1300px], mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4 text-teal-500'>
          <h3 className='text-2xl text-gray-200 font-semibold'>Wendy C.</h3>
            <a href="#"><FaWhatsappSquare className='font-8xl'/></a>
        </div>

        <p className='text-gray-400'>@2024 Wendy C.</p>

      </div>

    </div>

  )
}

export default Footer