import { useState } from 'react';
import Overview from '../Overview/Overview';
import Review from '../Review/Review';


const Description = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="container mx-auto my-20 border shadow-xl rounded-lg p-2 md:p-10 ">
            <div className='tabs'>
                <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "tab active-tab" : "tab"}>Overview</div>
                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "tab active-tab" : "tab"}>Review</div>
                <div onClick={() => toggleTab(3)} className={toggleState === 3 ? "tab active-tab" : "tab"}>Business Hours</div>
            </div>

            {/* contents */}
            <div className="contents">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <Overview></Overview>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>


                    <Review></Review>
                </div>
                <div className={toggleState === 3 ? "content active-content" : "content"}>


                    <h3 className='text-3xl font-bold mt-8 mb-4'>Electro  Gastrology Therapy</h3>
                    <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error</p>
                    <button className='border mt-10 border-[#F7A582] rounded-lg w-40 h-14 font-bold text-xl text-[#F7A582]'>More Details</button>

                </div>
            </div>
        </div>
    );
};

export default Description;