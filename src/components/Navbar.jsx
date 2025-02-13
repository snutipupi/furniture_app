import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu]= useState(false)

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return()=> {
      document.body.style.overflow = 'auto'
    }
  },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-1 lg:px-32 bg-transparent'>
      <div className="flex items-center gap-2">
        <img src={assets.logo} alt="BAFIMOB STANDARD Logo" className="w-10 h-10 object-contain" />
        <span className="text-lg font-semibold tracking-wide text-white">BAFIMOB STANDARD</span>
      </div>
        <ul className='hidden md:flex gap-7 text-white'>
            <a href="#Header" className='cursor-pointer hover:text-cyan-900'>Acasă</a>
            <a href="#About" className='cursor-pointer hover:text-cyan-900'>Despre Noi</a>
            <a href="#Projects" className='cursor-pointer hover:text-cyan-900'>Catalog</a>
        </ul>
        <a href="#Contact" className='hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer hover:bg-cyan-900 hover:text-white '>Contactează-ne</a>
        <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w7 cursor-pointer' alt="" />
      </div>
      {/* ---------------------meniu-mobil-------------------- */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
      <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className="w-6" alt="" />
          </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Acasă</a>
          <a onClick={()=> setShowMobileMenu(false)}  href="#About" className='px-4 py-2 rounded-full inline-block'>Despre Noi</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Catalog</a>
          <a onClick={()=> setShowMobileMenu(false)}href="#Contact" className='px-4 py-2 rounded-full inline-block'>Contactează-ne</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
