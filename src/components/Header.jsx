import React from 'react'
import Image from 'next/image'
import { ChartBarIcon, ChevronDownIcon, HomeIcon, SpeakerXMarkIcon  } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon, BellIcon, PlusIcon, GlobeAltIcon, SparklesIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <div className='flex bg-white px-4 py-2 shadow-sm sticky top-0 z-50 text-black'>
      <div className='relative flex-shrink-0 cursor-pointer'>
        <img class="object-fill h-10 w-10 " src="https://cdn-icons-png.flaticon.com/512/1384/1384067.png"  />
      </div>

      <div className='flex items-center mx-7 xl:min-w-[300px] '>
        <HomeIcon className='h-5 w-5' />
        <p className='flex-1 ml-2 hidden lg:inline'>Home</p>

        <ChevronDownIcon className='h-5 w-5' />
      </div>

      <form className='flex flex-1 items-center space-x-2 border border-gray-200 bg-gray-100 px-3 py-1'>
        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' rounded-sm />
        <input type="text" className='flex-1 bg-transparent outline-none' placeholder='Search Result' />
        <button type="submit" >Search</button>
      </form>

      <div className='mx-5 hidden items-center space-x-2  text-gray-500 lg:inline-flex '>
        <SparklesIcon className='icon' />
        <GlobeAltIcon className='icon' />
        <VideoCameraIcon className='icon' />
        <hr className='h-10 border border-gray-100' />
        <ChartBarIcon className='icon' />
        <BellIcon className='icon' />
        <PlusIcon className='icon' />
        <SpeakerXMarkIcon className='icon' />
      </div>

      <div className='mx-5 flex items-center '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default Header