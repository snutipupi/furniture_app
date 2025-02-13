import React, { useEffect, useState } from 'react';
import { assets, projectsData, productsData } from '../assets/assets';
import { motion } from "framer-motion"

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length);
            } else {
                setCardsToShow(1);
            }
        };
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    useEffect(() => {
        if (modalVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modalVisible]);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
    };

    const openModal = (category) => {
        setSelectedCategory(category);
        setFilteredProducts(productsData.filter(product => product.category === category));
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const scrollToContacts = () => {
        setTimeout(() => {
            const contactsSection = document.getElementById('Contact');
            if (contactsSection) {
                contactsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, x:-200 }}
            transition={{duration: 1}}
            whileInView={{opacity: 1, x:0}}
            viewport={{once:true}}
            
            className='container mx-auto py-4 pt-10 px-6 md:px-10 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
            <h1 className='text-2xl sm:text-4xl font-medium mb-2 text-center'>
                <span className='text-cyan-900 decoration-1 under'>Colecția de Mobilier</span>
            </h1>
            <p className='text-gray-500 max-w-150 text-center mb-3 mx-auto'>
            La Bafimob-Standard, suntem pasionați de proiectarea și fabricarea mobilierului de înaltă calitate, care îmbină funcționalitatea, durabilitatea și estetica atemporală.
            </p>

            <div className='flex justify-center items-center mb-8'>
                <button onClick={prevProject} className='p-3 cursor-pointer mr-2' aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button onClick={nextProject} className='p-3 cursor-pointer mr-2' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{ transform: `translatex(-${(currentIndex * 100) / cardsToShow}%)` }}>
                    {projectsData.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className='relative flex-shrink-0 w-full sm:w-1/4 cursor-pointer' 
                            onClick={() => openModal(project.title)}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-cyan-800 rounded w-3/4 px-4 text-center py-3 shadow-md'>
                                    <h2 className='text-xl font-semibold text-white'>
                                        {project.title}
                                    </h2>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {modalVisible && (
                <div className='fixed inset-0 flex justify-center items-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl max-h-[80vh] overflow-y-auto'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-2xl font-semibold'>Mobilier {selectedCategory}</h2>
                            <button onClick={closeModal} className='cursor-pointer'>
                                <img src={assets.cross_icon} alt='Close' className='w-6 h-6' />
                            </button>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                            {filteredProducts.map((product, index) => (
                                <motion.div 
                                    key={index} 
                                    className='border p-4 rounded-lg text-center' 
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <img src={product.image} alt={product.name} className='w-full h-48 md:h-64 lg:h-80 object-cover mb-4'/>
                                    <p className='text-lg font-semibold'>{product.name}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className='mt-4 flex justify-center'>
                            <button onClick={() => { closeModal(); scrollToContacts(); }} className='bg-cyan-900 text-white py-2 hover:bg-white cursor-pointer border hover:border-cyan-950 hover:text-cyan-950 px-12 mb-10 rounded'>Contacteaza-ne</button>
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default Projects;
