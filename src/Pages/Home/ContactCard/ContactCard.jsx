import { FaRegClock, FaPhoneVolume } from "react-icons/fa";
import { MdAddLocation } from "react-icons/md";


const ContactCard = () => {
    return (
        <div className="container mx-auto my-28 flex  flex-wrap flex-col gap-8 md:flex-row justify-between text-white">
            <div className="md:w-1/3 mx-2 py-4 md:py-0 h-[202px] flex-1 bg-teal-950 rounded-[10px] flex justify-center items-center gap-8" >
                <div><FaRegClock className="w-[50px] h-[50px] relative" /></div>
                <div className="space-y-4">
                    <h4 className="text-[25px] font-bold">Opening Hours</h4>
                    <p className="w-[209px] text-white text-xl font-normal">Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className="md:w-1/3 mx-2 py-4 md:py-0 h-[202px]  flex-1 bg-orange-300 rounded-[10px] flex justify-center items-center gap-8" >
                <div><MdAddLocation className="w-[50px] h-[50px] relative" /></div>
                <div className="space-y-4">
                    <h4 className="text-[25px] font-bold">Our Locations</h4>
                    <p className="w-[209px] text-white text-xl font-normal">Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className="md:w-1/3 mx-2 py-4 md:py-0 h-[202px] flex-1  bg-teal-950 rounded-[10px] flex justify-center items-center gap-8" >
                <div><FaPhoneVolume className="w-[50px] h-[50px] relative" /></div>
                <div className="space-y-4">
                    <h4 className="text-[25px] font-bold">Contact Us</h4>
                    <p className="w-[209px] text-white text-xl font-normal">+88 01750 00 00 00
                        +88 01750 00 00 00</p>
                </div>
            </div>

        </div>
    );
};

export default ContactCard;