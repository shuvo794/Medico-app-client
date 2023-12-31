import doc from '../../../assets/doctors/doc1.png';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { IoLocationOutline } from 'react-icons/io5';


const Profile = () => {
    return (
        <div className='container mx-auto flex gap-8 flex-col md:flex-row  border shadow-xl rounded-xl my-20 p-8'>
            <div className=''>
                <img className='h-full object-cover rounded-lg' src={doc} alt="" />
            </div>
            <div className=''>
                <h3 className='text-neutral-950 text-[40px] font-bold'>Dr. Ruby Perrin</h3>
                <p className="text-neutral-500 text-lg font-normal font-['Source Sans 3'] leading-relaxed">MBBS, MD - General Medicine</p>
                <div className='flex items-center gap-5'>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={3}
                        readOnly
                    />
                    <p className=''>(35)</p>
                </div>
                <div className='my-3 flex items-center gap-4 text-neutral-500 text-base font-normal '>
                    <IoLocationOutline className='w-6 h-6' />
                    <p>Dhanmondi, Dhaka, Bangladesh</p>
                </div>
                <div className='flex flex-wrap gap-4'>
                    <img className='w-20 h-20 object-cover rounded-md' src={doc} alt="" />
                    <img className='w-20 h-20 object-cover rounded-md' src={doc} alt="" />
                    <img className='w-20 h-20 object-cover rounded-md' src={doc} alt="" />
                    <img className='w-20 h-20 object-cover rounded-md' src={doc} alt="" />
                    <img className='w-20 h-20 object-cover rounded-md' src={doc} alt="" />
                </div>
                <div className='mt-4 flex flex-col md:flex-row gap-5'>
                    <button className='px-4 py-2 rounded-[10px] border border-neutral-500 text-center text-neutral-500 text-xl font-semibold'>Dental Filling</button>
                    <button className='px-4 py-2 rounded-[10px] border border-neutral-500 text-center text-neutral-500 text-xl font-semibold'>Teeth Whitneing</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;