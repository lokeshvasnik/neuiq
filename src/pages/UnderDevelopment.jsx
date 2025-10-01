import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../Utils/icons'

const UnderDevelopment = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-[calc(60vh)]" style={{
      background: "linear-gradient(135deg, rgb(16, 20, 33), rgb(28, 46, 91))",
    }}>
      <div className="text-center flex lg:flex-row-reverse flex-col gap-10 px-5">
        
        <div className='lg:h-32 lg:w-auto w-[80%] lg:mx-0 mx-auto'>
            <img src={icons.newiq_logo_white} alt="logo" className='h-full'/>
        </div>

        <div className='text-white'>
          <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
          <p className="text-lg text-white mb-8">
            Our website is under development. Stay tuned for something amazing!
          </p>
          <div className="flex justify-center">
            
            <Link to={'/'} className="py-2 px-4 bg-white text-[#1C2E5B] font-bold rounded-md  focus:outline-none focus:ring-2 ">
              Back to HomePage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnderDevelopment