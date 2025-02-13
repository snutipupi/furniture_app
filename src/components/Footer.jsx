import React from 'react';

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-cyan-900 w_full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>

        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-semibold mb-4'>Adresa</h3>
          <p className='text-white mb-4 max-w-80'>Moldova Chisinau Sihastrului 2A</p>
          <p className='text-white text-lg font-semibold mb-4'>Transport Public</p>
          <p className='text-white mb-4 max-w-80'><b>Troleibuz:</b> 3, 10, 24, 9, 17, 35, 36</p>
          <p className='text-white mb-4 max-w-80'><b>Autobuz:</b> 11</p>
        </div>
        
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-semibold mb-4'>Companie</h3>
          <ul className='flex flex-col gap-2 text-white'>
            <a className='hover:text-white' href="#Header">Acasă</a>
            <a className='hover:text-white' href="#About">Despre</a>
            <a className='hover:text-white' href="#Projects">Catalog</a>
          </ul>
        </div>

        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-semibold mb-4'>Contacte</h3>
          <p className='text-white mb-4 max-w-80'>+373 69 56 77 13</p>
          <p className='text-white mb-4 max-w-80'>+373 76 00 46 38</p>
          <p className='text-white mb-4 max-w-80'>+373 22 72 52 68</p>
          <p className='text-white mb-4 max-w-80'>bafimobstandard.md@gmail.com</p>
        </div>
      </div>

      <div className='w-full mt-10'>
        <iframe
          title='Google Maps'
          width='100%'
          height='350'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.5391298476314!2d28.856946976309896!3d47.02584797112842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97dbdf5ff9b73%3A0x84292e0c9fd2734b!2sStrada%20Sihastrului%202A%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2s!4v1700000000000'
        ></iframe>
      </div>

      <div className='border-t border-white py-4 mt-10 text-center text-white'>
        © Bafimob-Standard 2025
      </div>
    </div>
  );
};

export default Footer;