import { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const { logout, user } = useAuth();
    const handleLogout = () => {
        logout();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logged out successfully",
            showConfirmButton: false,
            timer: 1000
        });
    };
    return (
        <nav  className="bg-[#34495e] z-10 relative h-16 md:h-20 flex justify-center">
            <div className='flex justify-between items-center container mx-auto'>
                <img className='h-10' src={logo} alt="" />

                {/*for small device */}
                <ul className={`absolute w-full h-screen flex flex-col gap-10 justify-center items-center bg-[#F7A582] transform duration-500 ease-in-out ${open ? 'left-0 top-0' : '-top-[2000px]  left-0'} `}>
                    <Link className='text-3xl font-bold font-serif hover:bg-[#07332F] rounded-md p-1 hover:text-white'>Home</Link>
                    <Link className='text-3xl font-bold font-serif hover:bg-[#07332F] rounded-md p-1 hover:text-white'>about</Link>
                    <Link className='text-3xl font-bold font-serif hover:bg-[#07332F] rounded-md p-1 hover:text-white'>Home</Link>
                    <Link className='text-3xl font-bold font-serif hover:bg-[#07332F] rounded-md p-1 hover:text-white'>about</Link>
                    <Link to={'/signup'}><button className='flex bg-[#07332F] w-36 h-12 items-center justify-center rounded-lg font-bold text-3xl font-serif text-white'>Login</button></Link>
                </ul>

                {/* for medium and large device */}
                <ul className='md:flex hidden  space-x-5'>
                    <Link className='text-lg font-lg font-sans text-white hover:text-[#F7A582] rounded-md px-1'>Homes</Link>
                    <Link className='text-lg font-lg font-sans text-white hover:text-[#F7A582] rounded-md px-1'>abouts</Link>
                    <Link className='text-lg font-lg font-sans text-white hover:text-[#F7A582] rounded-md px-1'>Homes</Link>
                    <Link className='text-lg font-lg font-sans text-white hover:text-[#F7A582] rounded-md px-1'>abouts</Link>
                </ul>
                {user && <button onClick={handleLogout}>Logout</button>
                }
                <Link to={'/signin'}><button className='hidden md:flex hover:text-[#F7A582] font-serif w-36 h-12 items-center justify-center rounded-lg font-bold text-xl text-white transition ease-in-out duration-200'>Login / Register</button></Link>
                <div className='md:hidden z-20' onClick={() => setOpen(!open)}>
                    {
                        open ? <GiCrossedBones className='text-4xl text-[#07332F]' /> : <FaBarsStaggered className='text-4xl text-[#F7A582]' />
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;