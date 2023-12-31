import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import doc1 from '../../../assets/doctors/doc1.png';
import doc2 from '../../../assets/doctors/doc2.png';
import doc3 from '../../../assets/doctors/doc3.png';

import { IoLocationOutline } from "react-icons/io5";
import { GoCalendar } from "react-icons/go";
import { AiOutlineDollar } from "react-icons/ai";

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';
const Doctors = () => {
    const [slidesToShow, setSlidesToShow] = useState(3); // Default to 2 slides

    useEffect(() => {
        // Function to handle resizing and determine number of slides to show
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setSlidesToShow(1); // For mobile devices, show 1 slide
            } else {
                setSlidesToShow(3); // For other devices, show 2 slides
            }
        };

        handleResize(); // Call initially to set the initial number of slides

        window.addEventListener('resize', handleResize); // Add event listener for window resize
        return () => {
            window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
        };
    }, []);
    return (
        <div className='container mx-auto px-2  py-10'>
            <div className='text-center container flex justify-center items-center flex-col mx-auto mb-10'>
                <h3 className=' text-neutral-950 text-[40px] font-bold'>What Our Patients Says</h3>
                <p className=' text-neutral-700 w-[70%] text-base font-normal leading-relaxed'>Sed ut ooloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <Swiper
                slidesPerView={slidesToShow}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper "
            >
                <SwiperSlide className='my-10'>
                    <div className="flex flex-col justify-between  p-3 bg-white rounded-[10px] border border-neutral-200">
                        <img className='w-full' src={doc1} alt="" />
                        <h3 className="text-neutral-700 text-xl font-bold  leading-relaxed">Karyen Anderson</h3>
                        <div className="text-neutral-500 text-base font-normal  leading-relaxed">BTP -  Senior Physiotherapist</div>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={3}
                            readOnly

                        />
                        <div className="border-t border-gray-300 my-4"></div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <IoLocationOutline className='w-6 h-6' />
                            <p>Dhanmondi, Dhaka, Bangladesh</p>
                        </div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <GoCalendar className='w-6 h-6' />
                            <p>Available On Mon, 22 December</p>
                        </div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <AiOutlineDollar className='w-6 h-6' />
                            <p>$15</p>
                        </div>
                        <Link to={'/doctor'}><button className="w-full h-14 rounded-[10px] border border-orange-300 text-orange-300 text-xl font-bold hover:bg-orange-300 hover:text-white" >View Profile</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <div className="flex flex-col justify-between  p-3 bg-white rounded-[10px] border border-neutral-200">
                        <img className='w-full' src={doc3} alt="" />
                        <h3 className="text-neutral-700 text-xl font-bold  leading-relaxed">Pepe Sylvia</h3>
                        <div className="text-neutral-500 text-base font-normal  leading-relaxed">BTP -  Senior Physiotherapist</div>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={3}
                            readOnly

                        />
                        <div className="border-t border-gray-300 my-4"></div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <IoLocationOutline className='w-6 h-6' />
                            <p>Dhanmondi, Dhaka, Bangladesh</p>
                        </div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <GoCalendar className='w-6 h-6' />
                            <p>Available On Mon, 22 December</p>
                        </div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <AiOutlineDollar className='w-6 h-6' />
                            <p>$15</p>
                        </div>
                        <button className="w-full h-14 rounded-[10px] border border-orange-300 text-orange-300 text-xl font-bold hover:bg-orange-300 hover:text-white" >View Profile</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <div className="flex flex-col justify-between  p-3 bg-white rounded-[10px] border border-neutral-200">
                        <img className='w-full' src={doc2} alt="" />
                        <h3 className="text-neutral-700 text-xl font-bold  leading-relaxed">Rusty Shackleford</h3>
                        <div className="text-neutral-500 text-base font-normal  leading-relaxed">BTP -  Senior Physiotherapist</div>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={3}
                            readOnly

                        />
                        <div className="border-t border-gray-300 my-4"></div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <IoLocationOutline className='w-6 h-6' />
                            <p>Dhanmondi, Dhaka, Bangladesh</p>
                        </div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <GoCalendar className='w-6 h-6' />
                            <p>Available On Mon, 22 December</p>
                        </div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <AiOutlineDollar className='w-6 h-6' />
                            <p>$15</p>
                        </div>
                        <button className="w-full h-14 rounded-[10px] border border-orange-300 text-orange-300 text-xl font-bold hover:bg-orange-300 hover:text-white" >View Profile</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <div className="flex flex-col justify-between  p-3 bg-white rounded-[10px] border border-neutral-200">
                        <img className='w-full' src={doc1} alt="" />
                        <h3 className="text-neutral-700 text-xl font-bold  leading-relaxed">Karyen Anderson</h3>
                        <div className="text-neutral-500 text-base font-normal  leading-relaxed">BTP -  Senior Physiotherapist</div>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={3}
                            readOnly

                        />
                        <div className="border-t border-gray-300 my-4"></div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <IoLocationOutline className='w-6 h-6' />
                            <p>Dhanmondi, Dhaka, Bangladesh</p>
                        </div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <GoCalendar className='w-6 h-6' />
                            <p>Available On Mon, 22 December</p>
                        </div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <AiOutlineDollar className='w-6 h-6' />
                            <p>$15</p>
                        </div>
                        <button className="w-full h-14 rounded-[10px] border border-orange-300 text-orange-300 text-xl font-bold hover:bg-orange-300 hover:text-white" >View Profile</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <div className="flex flex-col justify-between  p-3 bg-white rounded-[10px] border border-neutral-200">
                        <img className='w-full' src={doc3} alt="" />
                        <h3 className="text-neutral-700 text-xl font-bold  leading-relaxed">Pepe Sylvia</h3>
                        <div className="text-neutral-500 text-base font-normal  leading-relaxed">BTP -  Senior Physiotherapist</div>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={3}
                            readOnly

                        />
                        <div className="border-t border-gray-300 my-4"></div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <IoLocationOutline className='w-6 h-6' />
                            <p>Dhanmondi, Dhaka, Bangladesh</p>
                        </div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <GoCalendar className='w-6 h-6' />
                            <p>Available On Mon, 22 December</p>
                        </div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <AiOutlineDollar className='w-6 h-6' />
                            <p>$15</p>
                        </div>
                        <button className="w-full h-14 rounded-[10px] border border-orange-300 text-orange-300 text-xl font-bold hover:bg-orange-300 hover:text-white" >View Profile</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <div className="flex flex-col justify-between  p-3 bg-white rounded-[10px] border border-neutral-200">
                        <img className='w-full' src={doc2} alt="" />
                        <h3 className="text-neutral-700 text-xl font-bold  leading-relaxed">Rusty Shackleford</h3>
                        <div className="text-neutral-500 text-base font-normal  leading-relaxed">BTP -  Senior Physiotherapist</div>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={3}
                            readOnly

                        />
                        <div className="border-t border-gray-300 my-4"></div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <IoLocationOutline className='w-6 h-6' />
                            <p>Dhanmondi, Dhaka, Bangladesh</p>
                        </div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <GoCalendar className='w-6 h-6' />
                            <p>Available On Mon, 22 December</p>
                        </div>
                        <div className='mb-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                            <AiOutlineDollar className='w-6 h-6' />
                            <p>$15</p>
                        </div>
                        <button className="w-full h-14 rounded-[10px] border border-orange-300 text-orange-300 text-xl font-bold hover:bg-orange-300 hover:text-white" >View Profile</button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Doctors;