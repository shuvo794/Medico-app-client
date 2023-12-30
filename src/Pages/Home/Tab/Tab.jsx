import React, { useState } from 'react';
import './Tab.css';
import teeth from '../../../assets/teeth.png';
import teeth2 from '../../../assets/white-teeth .jpg';
import teeth3 from '../../../assets/dentist.jpg';

const Tab = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div className='container mx-auto mt-14  '>
            {/* tabs */}
            <div className='tabs'>
                <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "tab active-tab" : "tab"}>Cavity Protection</div>
                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "tab active-tab" : "tab"}>Cosmetic Dentistry</div>
                <div onClick={() => toggleTab(3)} className={toggleState === 3 ? "tab active-tab" : "tab"}>Oral Surgery</div>
            </div>

            {/* contents */}
            <div className="contents">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <img className='w-full mt-8' src={teeth} alt="" />

                    <h3 className='text-3xl font-bold mt-8 mb-4'>Electro  Gastrology Therapy</h3>
                    <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error</p>
                    <button className='border mt-10 border-[#F7A582] rounded-lg w-40 h-14 font-bold text-xl text-[#F7A582]'>More Details</button>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <img className='w-full mt-8 rounded-lg' src={teeth2} alt="" />

                    <h3 className='text-3xl font-bold mt-8 mb-4'>Electro  Gastrology Therapy</h3>
                    <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error</p>
                    <button className='border mt-10 border-[#F7A582] rounded-lg w-40 h-14 font-bold text-xl text-[#F7A582]'>More Details</button>

                </div>
                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <img className='w-full mt-8' src={teeth3} alt="" />

                    <h3 className='text-3xl font-bold mt-8 mb-4'>Electro  Gastrology Therapy</h3>
                    <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error</p>
                    <button className='border mt-10 border-[#F7A582] rounded-lg w-40 h-14 font-bold text-xl text-[#F7A582]'>More Details</button>

                </div>
            </div>
        </div>
    );
};

export default Tab;