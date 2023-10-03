import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-row bg-neutral-300 h-screen w-screen'>
    <Sidebar />
    <div className='flex-1 h-screen flex flex-col'>
        <div className='p-4 min-h-0 overflow-auto'>{children}</div>
    </div>
</div>
  )
}

export default Layout