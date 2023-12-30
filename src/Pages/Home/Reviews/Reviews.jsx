import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import img1 from '../../../assets/reviewdoc1.png';
import img2 from '../../../assets/reviewdoc2.png';
import quote from '../../../assets/quote.png';

const Reviews = () => {
    const [slidesToShow, setSlidesToShow] = useState(2); // Default to 2 slides

    useEffect(() => {
        // Function to handle resizing and determine number of slides to show
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setSlidesToShow(1); // For mobile devices, show 1 slide
            } else {
                setSlidesToShow(2); // For other devices, show 2 slides
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
                <p className=' text-neutral-700 w-[70%] text-base font-normal leading-relaxed'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            <Swiper
                slidesPerView={slidesToShow}
                spaceBetween={30}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper "
            >
                <SwiperSlide className='my-10'>
                    <div className="  bg-white rounded-[10px] border border-neutral-200 flex flex-col justify-center gap-8 p-10">
                        <div className='flex justify-between'>
                            <div className='flex justify-between items-center'>
                                <img src={img1} alt="" />
                                <div className='ml-5'>
                                    <h5 className='text-neutral-700 text-xl font-bold leading-relaxed'>Awlad Hossain</h5>
                                    <p className=" text-neutral-500 text-base font-normal font-['Source Sans 3'] leading-relaxed" >Product Designer</p>
                                </div>
                            </div>
                            <div>
                                <img className='hidden md:block' src={quote} alt="" />
                            </div>
                        </div>
                        <div className=" text-neutral-500 text-lg font-normal font-['Source Sans 3'] leading-relaxed">
                            <p className='w-[280px]  md:w-[80%]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                        </div>
                        <img className='md:hidden w-20' src={quote} alt="" />

                    </div>
                </SwiperSlide>

                <SwiperSlide className='my-10'>
                    <div className="  bg-white rounded-[10px] border border-neutral-200 flex flex-col justify-center gap-8 p-10">
                        <div className='flex justify-between'>
                            <div className='flex justify-between items-center'>
                                <img src={img1} alt="" />
                                <div className='ml-5'>
                                    <h5 className='text-neutral-700 text-xl font-bold leading-relaxed'>Awlad Hossain</h5>
                                    <p className=" text-neutral-500 text-base font-normal font-['Source Sans 3'] leading-relaxed" >Product Designer</p>
                                </div>
                            </div>
                            <div>
                                <img className='hidden md:block' src={quote} alt="" />
                            </div>
                        </div>
                        <div className=" text-neutral-500 text-lg font-normal font-['Source Sans 3'] leading-relaxed">
                            <p className='w-[280px]  md:w-[80%]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                        </div>
                        <img className='md:hidden w-20' src={quote} alt="" />
                    </div>
                </SwiperSlide>


                <SwiperSlide className='my-10'>
                    <div className="  bg-white rounded-[10px] border border-neutral-200 flex flex-col justify-center gap-8 p-10">
                        <div className='flex justify-between'>
                            <div className='flex justify-between items-center'>
                                <img src={img1} alt="" />
                                <div className='ml-5'>
                                    <h5 className='text-neutral-700 text-xl font-bold leading-relaxed'>Awlad Hossain</h5>
                                    <p className=" text-neutral-500 text-base font-normal font-['Source Sans 3'] leading-relaxed" >Product Designer</p>
                                </div>
                            </div>
                            <div>
                                <img className='hidden md:block' src={quote} alt="" />
                            </div>
                        </div>
                        <div className=" text-neutral-500 text-lg font-normal font-['Source Sans 3'] leading-relaxed">
                            <p className='w-[280px]  md:w-[80%]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                        </div>
                        <img className='md:hidden w-20' src={quote} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide className='my-10'>
                    <div className="  bg-white rounded-[10px] border border-neutral-200 flex flex-col justify-center gap-8 p-10">
                        <div className='flex justify-between'>
                            <div className='flex justify-between items-center'>
                                <img src={img1} alt="" />
                                <div className='ml-5'>
                                    <h5 className='text-neutral-700 text-xl font-bold leading-relaxed'>Awlad Hossain</h5>
                                    <p className=" text-neutral-500 text-base font-normal font-['Source Sans 3'] leading-relaxed" >Product Designer</p>
                                </div>
                            </div>
                            <div>
                                <img className='hidden md:block' src={quote} alt="" />
                            </div>
                        </div>
                        <div className=" text-neutral-500 text-lg font-normal font-['Source Sans 3'] leading-relaxed">
                            <p className='w-[280px]  md:w-[80%]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                        </div>
                        <img className='md:hidden w-20' src={quote} alt="" />
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Reviews;