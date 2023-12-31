import img from '../../assets/footerlogo.png';

const Footer = () => {
    return (
        <div className='bg-zinc-100 py-16'>
            <div className="my-8 text-center flex flex-col md:flex-row container justify-between mx-auto ">
                <div className=" md:w-1/3 flex flex-col md:flex-row justify-between items-center">
                    <div className='flex flex-col items-center'>
                        <img src={img} alt="" />
                        <p className="w-3/4  text-neutral-700 text-base font-normal leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, autem!</p>
                        <button className='border mt-10 border-[#F7A582] rounded-lg w-40 h-14 font-bold text-xl text-[#F7A582]'>Appointment</button>
                    </div>
                </div>

                <div className=" text-[#6C6B6B] md:w-2/3 flex flex-col md:flex-row justify-around items-center md:items-start">
                    <div className='space-y-6 my-4'>
                        <h3 className="text-neutral-950 text-[25px] font-bold font-['Source Sans 3']">Quick Links</h3>
                        <p>About Us</p>
                        <p>Service</p>
                        <p>Doctors</p>
                        <p>Departments</p>
                        <p>Online Payment</p>
                        <p>Contact Us</p>
                        <p>My Account</p>

                    </div>
                    <div className='space-y-6 my-4'>
                        <h3 className="text-neutral-950 text-[25px] font-bold font-['Source Sans 3']">Doc House Services</h3>
                        <p>Pediatric Clinic</p>
                        <p>Diagnosis Clinic</p>
                        <p>Cardiac Clinic</p>
                        <p>Laboratory Analysis</p>
                        <p>Gynecological Clinic</p>
                        <p>Personal Counseling</p>
                        <p>Dental Clinic</p>
                    </div>
                    <div className='space-y-6 my-4'>
                        <h3 className="text-neutral-950 text-[25px] font-bold font-['Source Sans 3']">Working Hours</h3>
                        <p>Monday - 10 am to 7 pm</p>
                        <p>Tuesday - 10 am to 7 pm</p>
                        <p>Wednesday - 10 am to 7 pm</p>
                        <p>Thursday - 10 am to 7 pm</p>
                        <p>Friday - 10 am to 7 pm</p>
                        <p>Saturday - 10 am to 7 pm</p>
                        <p>Sunday - 10 am to 7 pm</p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto text-center'>
                <div className="border-t border-gray-300 mb-4"></div>
                <p className="mt-10 text-neutral-500 text-lg font-normal font-['Source Sans 3']">Copyright © 2022 - All right reserved by Doc House Ltd</p>
            </div>
        </div>
    );
};

export default Footer;