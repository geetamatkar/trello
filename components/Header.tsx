'use client';
import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, UserCircleIcon} from "@heroicons/react/24/solid"
import Avatar from 'react-avatar'

function Header() {
  return (
    <header className='sticky top-0' >
        <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10'>
            <Image src= "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png" 
            alt='Trello logo'
            width={300}
            height={100}
            className='w-44 md:w56 pb-10 md:pb-0 object-contain'/>


            <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
                {/* Search box */}
                <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
                    <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
                    <input type='text' placeholder='Search' className='flex-1 outline-none'/>
                    <button type='submit' hidden>Search</button>
                </form>


                {/* Avatar */}
                <Avatar name='Geeta' round size='50' color='#D291BC'/>
            </div>
         </div>

         <div className='flex items-center justify-center px-5 md:py-5'>
            <p className='flex p-5 items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#D291BC]'>
                <UserCircleIcon  className='inline-block h-10 w-10 text-[#D291BC] mr-1'/>
                GPT is summarising your tasks...
            </p>

         </div>
    </header>
  )
}

export default Header