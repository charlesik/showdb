import React from 'react'

export default function Header() {
  return (
    <div>
        <div className='bg-nav-color h-16 pt-4 pl-4'>
        <div className='border w-32 text-center m-auto lg:m-0 '>
        <p className='text-white text-xl'>MyTestApp</p>
        </div>
      </div>
      <div className='h-hero bg-herobg pt-40 '>
        <div className='  lg:w-1/4 lg:ml-20 text-center md:w-1/3 md:m-auto lg:text-left'>
          <p className='text-white text-4xl lg:text-5xl md:text-5xl font-bold mb-3 '>Watch Something</p>
          
          <p className='text-white text-4xl lg:text-5xl md:text-5xl font-bold mb-5 '>Incredible.</p>
        </div>

      </div>
    </div>
  )
}
