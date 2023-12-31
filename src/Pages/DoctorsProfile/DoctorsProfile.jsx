import { Link } from 'react-router-dom';
import vector from '../../assets/styles/Vector.png';
import vector2 from '../../assets/styles/vector2.png';

import Profile from './Profile/Profile';
import Description from './Description/Description';

const DoctorsProfile = () => {

    return (
        <div className=''>
            <div className='h-52 xl:h-64  relative bg-[#07332F]'>
                <img className='h-40 absolute  bottom-0 left-28' src={vector} alt="" />
                <img className='h-48 absolute bottom-20 right-28' src={vector2} alt="" />

                <div className='relative pt-28 container mx-auto'>
                    <div className='ml-5 md:absolute'>
                        <div className='static container mx-auto text-zinc-100 text-lg font-normal'><Link to={'/'}> <button>Home</button> </Link>/ <Link>Doctor Profile</Link></div>
                        <h2 className='text-5xl text-zinc-100 text-[45px] font-bold'>Doctor Profile</h2>
                    </div>
                </div>

            </div>

            <div className='mx-2 md:mx-0'>
                <Profile></Profile>

                <Description></Description>
            </div>
        </div>
    );
};

export default DoctorsProfile;