import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "framer-motion"

const Testimonials = () => {
  return (
    <motion.div 
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-semibold mb-2'>
        <span className='text-cyan-900 decoration-1 font-medium'>Ce spun clienții noștri?</span>
      </h1>
      <p className='text-center text-gray-500 max-w-150 mb-8 mx-auto'>
        Recenziile clienților noștri reflectă angajamentul nostru față de calitate, punctualitate și seriozitate. Descoperă părerile celor care au ales mobilierul nostru!
      </p>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className='text-xl text-cyan-950 font-medium'>{testimonial.name}</h2>
            <div className='flex justify-center gap-1 mb-4'>
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className='text-gray-600'>{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
