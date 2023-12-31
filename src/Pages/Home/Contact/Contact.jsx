
import { FaPhoneVolume } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TimePicker from 'react-time-picker';

const Contact = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const isValidTime = (date) => {
        const hours = date.getHours();
        return hours >= 10 && hours <= 22;
    };

    const timeIntervals = 30;


    //time
    const [selectedTime, setSelectedTime] = useState(null);

    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };
    const minTime = new Date();
    minTime.setHours(10, 0, 0); // Set minimum time to 10:00 AM

    const maxTime = new Date();
    maxTime.setHours(22, 0, 0); // Set maximum time to 10:00 PM

    const isValidTimee = (time) => {
        const selectedHours = time.getHours();
        return selectedHours >= 10 && selectedHours <= 22; // Check if the selected time is within the range
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const doctor = form.doctor.value;
        const date = form.date.value;
        const time = form.time.value;
        console.log(name, phone, email, doctor, date, time);
    }

    return (
        <div className='container mx-auto my-20 bg-teal-950 md:rounded-[10px] px-5 py-20 md:p-20 flex flex-col md:flex-row'>
            <div className='md:w-5/12'>
                <div className="text-white text-[40px] font-bold">Contact With Us</div>
                <div className=" text-white text-base font-normal leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</div>
                <div className='mt-10 space-y-5'>
                    <div className='flex items-center'>
                        <FaPhoneVolume className="w-[30px] h-[30px] text-white relative mr-5" />
                        <p className="text-white text-base font-normal leading-relaxed">+88 01750 14 14 14</p>
                    </div>
                    <div className='flex items-center'>
                        <IoLocationOutline className='w-[30px] h-[30px] text-white mr-5' />
                        <p className="text-white  text-base font-normal leading-relaxed">Dhanmondi, Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className='md:w-7/12 mt-10 md:mt-0'>
                <form onSubmit={handleSubmit}>
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div><input name='name' className="input-field-contact w-full focus:outline-none focus:border focus:border-[#F7A582]  h-16 px-4 bg-white text-white bg-opacity-5 rounded-[10px]" type='text' placeholder='Name' /></div>

                        <div><input name='email' className="w-full h-16 px-4 bg-white text-white bg-opacity-5 rounded-[10px] focus:outline-none focus:border focus:border-[#F7A582]" type='email' placeholder='Email' /></div>

                        <div><input name='phone' className="w-full h-16 px-4 bg-white text-white bg-opacity-5 rounded-[10px] focus:outline-none focus:border focus:border-[#F7A582]" type='tel' placeholder='Mobile Number' /></div>

                        <div><input name='doctor' className="w-full h-16 px-4 bg-white text-white bg-opacity-5 rounded-[10px] focus:outline-none focus:border focus:border-[#F7A582]" type='text' placeholder="Doctor's Name" /></div>

                        <div className=''>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                filterDate={isWeekday}
                                minDate={new Date()}
                                dateFormat="MMMM d, yyyy"
                                placeholderText='Pick a Date'
                                className="w-full h-16 px-4 bg-white text-white bg-opacity-5 rounded-[10px] focus:outline-none focus:border focus:border-[#F7A582]"
                                name='date'
                                wrapperClassName="w-full max-w-md mx-auto"
                            />
                        </div>
                        <div>
                            <DatePicker
                                selected={selectedTime}
                                onChange={handleTimeChange}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                minTime={minTime}
                                maxTime={maxTime}
                                filterTime={(time) => isValidTimee(time)}
                                dateFormat="h:mm aa" // Time format
                                className="w-full h-16 px-4 bg-white text-white bg-opacity-5 rounded-[10px] focus:outline-none focus:border focus:border-[#F7A582]"
                                wrapperClassName="w-full max-w-md mx-auto" // Wrapper class for width and margin
                                name='time'
                                placeholderText='Pick a Time'
                            />
                        </div>
                    </div>
                    <input className="w-full h-16 mt-5 bg-[#F7A582] rounded-[10px]" type="submit" />

                </form>
            </div>
        </div>
    );
};

export default Contact;