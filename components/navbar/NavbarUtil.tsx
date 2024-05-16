"use client"

import React from 'react'
import { useSelector } from 'react-redux'
import { authStatus } from '@/features/AuthSlice'
import Link from 'next/link'
import Image from 'next/image'
import DrawerRight, {} from '@/utils/navbar/DrawerRight'
import LogoutModal from '@/utils/navbar/LogoutModal'

const NavbarComponent = () => {

  const loginStatus = useSelector(authStatus);
  const auth = loginStatus.authentication;

  return (
    <div className='flex justify-between items-center w-full min-h-[10vh] bg-dark-1 px-4'>
      <Link href="/">
      <div className='rounded-full flex justify-center items-center gap-x-[1rem]'>
          <Image src='/images/images (6).jpg' alt='admin-panel-nipix' width={12} height={12
          } className='rounded-full w-12 h-12  hover:translate-x-2 hover:scale-105 transition-all duration-300 ease-in-out' />
          <h1 className='text-xl hidden sm:flex text-dark-2 font-semibold'>
            Nipix <span className='text-dark-5 font-bold'>Admin</span> 
          </h1>
      </div>
      </Link>
      
      <ul className='sm:flex items-center gap-x-[2rem] justify-center hidden'>
        <li className='text-md text-dark-2 font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
          <Link className='' href="/admin/users">
            Users
          </Link>
        </li>
        <li className='text-md text-dark-2 font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
          <Link className='' href="/admin/course">
            Courses
          </Link>
        </li>
        <li className='text-md text-dark-2 font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
          <Link className='' href="/admin/webinars">
            Webinars
          </Link>
        </li>
        <li className='text-md text-dark-2 font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
          <Link className='' href="/admin/instructor">
            Instructors
          </Link>
        </li>
      </ul>

      
    <div className='rounded-lg sm:flex justify-around items-center gap-x-[1rem] hidden '>
       <>
        {(auth) ? (
          <React.Fragment>
            <LogoutModal />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button className='text-md text-dark-1 bg-dark-3 px-2 py-1 rounded-lg shadow-md font-semibold hover:translate-x-1 hover:bg-dark-4 hover:scale-105 transition-all duration-300 ease-in-out'>
              <Link href="/admin/auth/login">
                Login
              </Link>
            </button> 
          </React.Fragment>
        )}
       </>

      <h1 className='text-md text-dark-4 font-bold hover:text-dark-4 hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
        <Link href="/admin/dashboard">
          Dashboard
        </Link>
      </h1>
    </div>

    <div className='sm:hidden block'>
      <DrawerRight />
    </div>

    </div>
  )
}

export default NavbarComponent