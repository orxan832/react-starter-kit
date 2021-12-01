import React from 'react';
import Moon from '../assets/images/nature.jpg';

const Login = () => {
    return (
        <div className='relative md:flex w-full h-screen'>
            <div className='absolute inset-0 md:relative w-full md:flex md:w-1/2 xl:w-3/5'>
                <img src={Moon} className='w-full h-full object-cover' />
            </div>
            <div className='absolute inset-0 z-50 w-full md:relative md:w-1/2 xl:w-2/5 flex flex-col justify-center text-gray-600 tracking-wider'>
                {/* <span className='text-center text-xl italic font-semibold'>React Starter Kit</span> */}
                <span className='pb-8 text-center text-lg font-semibold'>Login page</span>
                <div className='flex flex-col px-16 space-y-5'>
                    <div className='flex flex-col'>
                        <label className='text-sm font-semibold text-gray-400'>Email</label>
                        <input type='text' className='py-2 outline-none border-b border-gray-300 tracking-wider' placeholder='Type email here...' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-semibold text-gray-400'>Password</label>
                        <input type='password' className='py-2 outline-none border-b border-gray-300 tracking-wider' placeholder='Type password here...' />
                    </div>
                    <a href='#' className='text-sm font-semibold text-gray-400 ml-auto'>Forgot password?</a>
                    <button className='px-5 py-2 bg-gray-700 text-white tracking-wider font-semibold transition duration-500 ease-in-out hover:bg-gray-900'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;