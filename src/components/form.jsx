import React, { useState } from 'react'
import errorSign from '../assets/icons/errorSign.svg'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        phoneError: "",
        messageError: "",
    });

    const updateName = (e) => {
        setFormData({
            ...formData,
            name: e.target.value,
        });
    };

    const updateEmail = (e) => {
        setFormData({
            ...formData,
            email: e.target.value,
        });
    };

    const updatePhone = (e) => {
        setFormData({
            ...formData,
            phone: e.target.value,
        });
    };
    const updateMessage = (e) => {
        setFormData({
            ...formData,
            message: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        const validationErrors = {};

        if (!formData.name.trim()) {
            validationErrors.nameError = "Can't be empty";
        }else{
            validationErrors.nameError = "";
        }

        if (!formData.email.trim()) {
            validationErrors.emailError = "Can't be empty";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            validationErrors.emailError = "Invalid email address";
        } else {
            validationErrors.emailError = "";
        }

        if (!formData.phone.trim()) {
            validationErrors.phoneError = "Can't be empty";
        } else {
            validationErrors.phoneError = "";
        }

        if (!formData.message.trim()) {
            validationErrors.messageError = "Can't be empty";
        } else {
            validationErrors.messageError = "";
        }

        setErrors(validationErrors);
        const isValid = Object.values(validationErrors).every((error) => error === "");

        if (!isValid) {
            e.preventDefault();
        }
        
    };
    

    return (
        <form className='flex flex-col w-full'>
            <div className='flex flex-col w-full relative'>
                <input className='bg-inherit border-b caret-[#FFF] border-b-[#FFF] outline-none h-[62px] font-medium text-[15px] leading-[26px] text-[#FFF] placeholder:text-[#FFF] placeholder:opacity-50 focus:border-b-[3px] pl-[14px] pr-[120px]' type="text" placeholder='Name' onChange={updateName} />
                {errors.nameError &&
                    <div className='flex items-center gap-[9px] absolute top-[16px] right-[8px]'>
                        <span className='font-normal text-[12px] text-[#FFF] leading-[26px] italic'>{errors.nameError}</span>
                        <img className='w-5 h-5' src={errorSign} />
                    </div>}
            </div>
            <div className='flex flex-col w-full relative'>
                <input className='bg-inherit border-b caret-[#FFF] border-b-[#FFF] outline-none h-[62px] font-medium text-[15px] leading-[26px] text-[#FFF] placeholder:text-[#FFF] placeholder:opacity-50 focus:border-b-[3px] pl-[14px]' type="email" placeholder='Email Address' onChange={updateEmail} />
                {errors.emailError &&
                    <div className='flex items-center gap-[9px] absolute top-[16px] right-[8px]'>
                        <span className='font-normal text-[12px] text-[#FFF] leading-[26px] italic'>{errors.emailError}</span>
                        <img className='w-5 h-5' src={errorSign} />
                    </div>}
            </div>
            <div className='flex flex-col w-full relative'>
                <input className='bg-inherit border-b caret-[#FFF] border-b-[#FFF] outline-none h-[62px] font-medium text-[15px] leading-[26px] text-[#FFF] placeholder:text-[#FFF] placeholder:opacity-50 focus:border-b-[3px] pl-[14px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type="number" placeholder='Phone' onChange={updatePhone} />
                {errors.phoneError &&
                    <div className='flex items-center gap-[9px] absolute top-[16px] right-[8px]'>
                        <span className='font-normal text-[12px] text-[#FFF] leading-[26px] italic'>{errors.phoneError}</span>
                        <img className='w-5 h-5' src={errorSign} />
                    </div>}
            </div>
            <div className='flex flex-col w-full relative'>
                <input className='bg-inherit border-b caret-[#FFF] border-b-[#FFF] outline-none h-[126px] pb-[70px] font-medium text-[15px] leading-[26px] text-[#FFF] placeholder:text-[#FFF] placeholder:opacity-50 focus:border-b-[3px] pl-[14px]' type="text" placeholder='Your Message' onChange={updateMessage} />
                {errors.messageError &&
                    <div className='flex items-center gap-[9px] absolute top-[16px] right-[8px]'>
                        <span className='font-normal text-[12px] text-[#FFF] leading-[26px] italic'>{errors.messageError}</span>
                        <img className='w-5 h-5' src={errorSign} />
                    </div>}
            </div>
            <input className='bg-[#FFF] w-[152px] h-[56px] cursor-pointer hover:bg-[#ffad9b] hover:text-[#FFF] duration-300 mt-10 rounded-[8px] font-medium text-[15px] mx-auto tracking-[1px] md:mt-6 md:mx-0 md:ml-auto' type="submit" value={"SUBMIT"} onClick={handleSubmit} />
        </form>
    )
}

export default Contact