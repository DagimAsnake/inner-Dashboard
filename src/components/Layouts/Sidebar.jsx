import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { FaPeace } from 'react-icons/fa'
import { HiOutlineLogout } from 'react-icons/hi'
import { DashboardBottom, DashboardTop } from '../../constats/Navigation'

const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-md text-base"

function Sidebar() {

  const logoutHandler = () => {
    // Handle logout logic here
  }

  return (
    <div className='flex flex-col bg-white md:w-80 w-20 p-3 text-white'>
      <div className='flex items-center gap-2 px-1 py-3'>
        <FaPeace fontSize={24} className='text-blue-500 text-5xl' />
        <span className='text-orange-500 text-4xl font-bold hidden md:inline'>Inner Peace</span>
      </div>
      <div className='flex-1'>
        <div className='grid grid-cols-1 gap-1'>
          {DashboardTop.map((item) => {
            return <SidebarLink key={item.key} item={item} />
          })}
        </div>
      </div>
      <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
        {DashboardBottom.map((item) => {
          return <SidebarLink key={item.key} item={item} />
        })}
        <div onClick={logoutHandler} className={classNames('text-red-500 cursor-pointer', linkClasses)}>
          <span className='text-3xl'><HiOutlineLogout /></span>
          <span className='hidden md:inline text-2xl font-bold'> Logout</span>
        </div>
      </div>
    </div>
  )
}

function SidebarLink({ item }) {
  const { pathname } = useLocation()

  return (
    <Link to={item.path} className={classNames(pathname === item.path ? "bg-neutral-700" : "", linkClasses)}>
      <span className='text-3xl text-blue-500'>{item.icon}</span>
      <span className='hidden md:inline text-orange-500 text-2xl font-bold'>{item.label}</span>
    </Link>
  )
}


export default Sidebar