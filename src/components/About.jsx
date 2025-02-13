import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x:200 }}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once:true}}

    className='flex flex-col items-center justify-center container mx-auto p-10 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-semibold mb-2'>
        <span className='text-cyan-900 decoration-1 font-medium'>Cine Suntem Noi?</span>
      </h1>
      <p className='text-gray-500 max-w-160 text-center mb-8 mx-auto'>
       Producători de mobilier dedicați calității, inovației și designului funcțional.
      </p>

      <div className='grid sm:grid-cols-2 mt-5 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full md:gap-10 text-center mb-10'>
        <div>
          <p className='text-4xl font-medium text-cyan-900'>25+</p>
          <p>Ani de Experiență</p>
        </div>
        <div>
          <p className='text-4xl font-medium text-cyan-900'>1000+</p>
          <p>Proiecte Minunate</p>
        </div>
        <div>
          <p className='text-4xl font-medium text-cyan-900'>1200+</p>
          <p>Clienți Fericiți</p>
        </div>
        <div>
          <p className='text-4xl font-medium text-cyan-900'>30+</p>
          <p>Poiecte în derulare</p>
        </div>
      </div>


      <div className='grid grid-cols-1 lg:grid-cols-2 mt-5 items-start w-full place-items-center'>
        <div className='text-center lg:text-left flex flex-col justify-start h-full w-full'>
        <p className='mb-6 leading-8'>
          Compania noastră activează în domeniul producției de mobilier de peste 20 de ani. Direcția și sarcinile pe care le rezolvăm zilnic, precum și pe termen lung, vizează confortul, ambianța și caracterul practic al întregii game de produse. Echipa noastră se străduiește întotdeauna să țină pasul cu timpul, asigurând calitatea și designul mobilierului pentru toată lumea, la cele mai bune prețuri.
          <br /><br />
          Recent, am început să producem bucătării cu fronturi din MDF vopsit, utilizând exclusiv vopsea de înaltă calitate ICA, lider de piață în gama de lacuri pe bază de apă. Aceste fațade vopsite oferă multiple avantaje, inclusiv durabilitate și estetică superioară.
          <br /><br />
          Astăzi, Bafimob-Standard este recunoscută ca un nume de încredere în industrie, dedicată calității, inovației și satisfacției clienților. Misiunea noastră este de a aduce mobilier funcțional și elegant în case și afaceri, asigurând durabilitate și un design atemporal.
      </p>

        </div>

        <div className='w-full flex justify-center items-start'>
          <img src={assets.brand_img} 
              alt="About Us" 
              className='w-full sm:w-3/4 md:w-full lg:w-3/4' />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
