import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage:"url('/header_img.png')"}} id='Header' >
      <Navbar/>
      <motion.div 
      initial={{ opacity: 0, y:-100 }}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once:true}}
      
      className='container text-center mx-auto py-4 px-6 md:px-10 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-2xl md:text-[72px] inline-block max-w-3xl font-semibold pt-10 leading-[1]'>Descoperă mobila perfectă pentru casa ta</h2>
        <p className='text-white-500 leading-[1.8] hidden md:block mt-5'>Peste 1000 de proiecte de fabricare și amenajăre a mobilei realizate cu succes. <br />
Proprietarii ne-au ales în locul altor companii datorită calității și inovației. <br />
Pentru că munca noastră este diferită. <br /></p>
        <div className='mt-10' >
            <a href="#Testimonials " className='border border-white  px-8 py-3 rounded hover:bg-cyan-900 hover:border-cyan-900 hover:text-white '>Mai multe despre noi</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
