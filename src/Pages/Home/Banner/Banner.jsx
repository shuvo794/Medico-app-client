import hero1 from '../../../assets/hero1.png';
import hero2 from '../../../assets/hero2.png';
import hero3 from '../../../assets/hero3.png';
import doc from '../../../assets/Group 34991.png';
import frame from '../../../assets/Frame-1.png';
import { Link } from 'react-router-dom';

function Banner() {
  return (

      <div className="relative h-screen z-0 bg-[#34495e]">

            <div className='text-[#F3F3F3] container mx-auto flex flex-col items-center md:flex-row '>
                <div className='my-20 md:mt-32 md:w-1/2 flex flex-col items-center text-center '>
                    <h1 className='text-4xl lg:text-7xl font-semibold mb-5'>Your Best Medical Help Center</h1>
                    <p className='text-lg md:text-xl font-normal mb-10 '>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry's stardard.</p>

                    <Link><button className='flex bg-[#F7A582] hover:bg-[#f59264]  w-36 h-12 items-center justify-center rounded-lg font-bold text-xl font-sans text-white'>All Services</button></Link>
                </div>

                <div className='md:w-1/2'>
                    <img className='hidden mt-16 md:block float-right' src={doc} alt="" />
                    <img className='absolute top-0 left-0' src={frame} alt="" />

                    <div className='relative md:hidden w-[350px] md:w-auto'>
                        <img className='absolute h-36 md:h-72  left-5 top-10 md:-top-14' src={hero3} alt="" />
                        <img className='absolute h-36 md:h-72  left-1/3 top-20 md:top-0' src={hero2} alt="" />
                        <img className='absolute h-36 md:h-72  right-5 top-5 md:-top-28 ' src={hero1} alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Banner