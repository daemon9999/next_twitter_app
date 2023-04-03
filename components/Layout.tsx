import React, { ReactNode } from 'react'


interface LayoutProps {
    children: ReactNode
}
const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
   <div className='h-screen bg-black'>
        <div className='container h-full '>
        {children}
    </div>
   </div>
  )
}

export default Layout