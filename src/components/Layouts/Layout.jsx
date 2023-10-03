import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-row bg-neutral-300 h-screen w-screen'>
    <Sidebar />
    <div className='flex-1 h-screen flex flex-col'>
        <div className='p-4 min-h-0 overflow-auto'>{<Outlet />}</div>
    </div>
</div>
  )
}

export default Layout