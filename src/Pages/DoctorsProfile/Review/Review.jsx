import img1 from '../../../assets/doctors/doc1.png';
import quote from '../../../assets/quote.png';

const Review = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-5'>
                <h3 className='text-neutral-700 text-xl font-bold mb-2'>Patients Reviews</h3>
                <button className='px-4 py-2 rounded-[10px] border border-neutral-500 text-center text-neutral-500 text-xl font-semibold'>Leave a Review</button>
            </div>

            <div className="  bg-white rounded-[10px] border border-neutral-200 flex flex-col justify-center gap-8 p-5">
                <div className='flex justify-between'>
                    <div className='flex justify-between items-center'>
                        <img className='h-20 w-20 object-cover rounded-md' src={img1} alt="" />
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
        </div>
    );
};

export default Review;