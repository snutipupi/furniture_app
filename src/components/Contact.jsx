import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "framer-motion"

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Transmitere....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9c5fbacc-2a81-47d8-b02a-72833f340b2c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Transmis cu succes")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <motion.div 
            initial={{ opacity: 0, x:-200 }}
              transition={{duration: 1}}
              whileInView={{opacity: 1, x:0}}
              viewport={{once:true}} 
              className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-semibold mb-2'>
        <span className=' text-cyan-900 decoration-1 font-medium'>Contactează-ne</span>
      </h1>
      <p className='text-center text-gray-500 max-w-120  mb-8 mx-auto'>
      Scrie-ne un mesaj și în cel mai scurt timp vei fi contactat(ă) de către unul din operatorii noștri.
      </p>

        <form onSubmit={onSubmit} className='max-w-4xl mx-auto text-gray-950'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                Nume
                <input className='w-full border border-gray-950 rounded py-3 px-4 mt-2' 
                type="text" placeholder='Ana' name='Name'    required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                Număr de telefon
                <input className='w-full border border-gray-950 rounded py-3 px-4 mt-2' 
                type="number" placeholder='+373 68 45 56 89' name='text' required/>
                </div>
            </div>
            <div className='my-6 text-left'>
                Descriere
                <textarea className='w-full border border-gray-950 rounded py-3 px-4 h-48 mt-2 resize-none' 
                name="Mesage" placeholder='Detailii' required></textarea>
            </div>
            <button className='bg-cyan-900 text-white py-2 hover:bg-white cursor-pointer border hover:border-cyan-900 hover:text-cyan-900 px-12 mb-10 rounded'>
              {result ? result : "Transmite"}
              </button>
        </form>

    </motion.div>
  )
}

export default Contact
