import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router';
import Moon from '../assets/images/nature.jpg';

const Register = () => {

    const [form, setForm] = useState({});

    const navigate = useNavigate();

    const submitHandler = useCallback(() => {
        navigate('/login');
    }, []);

    return (
        <div className='relative md:flex w-full h-screen'>
            <div className='absolute inset-0 md:relative w-full md:flex md:w-1/2 xl:w-3/5'>
                <img src={Moon} className='w-full h-full object-cover' />
            </div>
            <div className='absolute inset-0 z-50 w-full md:relative md:w-1/2 xl:w-2/5 flex flex-col justify-center items-center text-gray-600 tracking-wider md:mx-4'>
                {/* <span className='text-center text-xl italic font-semibold'>React Starter Kit</span> */}
                <div className='bg-gray-100 px-8 py-5 mx-4 rounded w-5/6 md:w-full shadow-lg'>
                    <span className='text-center text-lg font-semibold'>Register page</span>
                    <div className='flex flex-col space-y-5 mt-5'>
                        <div className='flex flex-col'>
                            <label className='text-sm font-semibold text-gray-400'>Name</label>
                            <input type='text' className='bg-gray-100 py-2 outline-none border-b border-gray-300 tracking-wider' placeholder='Type name here...' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm font-semibold text-gray-400'>Surname</label>
                            <input type='text' className='bg-gray-100 py-2 outline-none border-b border-gray-300 tracking-wider' placeholder='Type surname here...' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm font-semibold text-gray-400'>Email</label>
                            <input type='email' className='bg-gray-100 py-2 outline-none border-b border-gray-300 tracking-wider' placeholder='Type email here...' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm font-semibold text-gray-400'>Password</label>
                            <input type='password' className='bg-gray-100 py-2 outline-none border-b border-gray-300 tracking-wider' placeholder='Type password here...' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm font-semibold text-gray-400'>Retry Password</label>
                            <input type='password' className='bg-gray-100 py-2 outline-none border-b border-gray-300 tracking-wider' placeholder='Type password retry here...' />
                        </div>
                        <a href='#' className='text-sm font-semibold text-gray-400 ml-auto'>Forgot password?</a>
                        <button className='px-5 py-2 bg-gray-700 text-white tracking-wider font-semibold transition duration-500 ease-in-out hover:bg-gray-900' onClick={submitHandler}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;