import React from 'react';

const Register = () => {
    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='bg-white w-1/2 lg:w-1/3 shadow-lg flex flex-col pb-8 space-y-12'>
                <span className='py-3 text-center text-xl w-full bg-black text-white'>Starter Template Register</span>
                <div className='flex flex-col space-y-12 px-5'>
                    <input
                        type='text'
                        placeholder='Name'
                        className='outline-none border-b-2 border-black w-full px-3 py-2 tracking-wider' />
                    <input
                        type='text'
                        placeholder='Surname'
                        className='outline-none border-b-2 border-black w-full px-3 py-2 tracking-wider' />
                    <input
                        type='text'
                        placeholder='example@domain.com'
                        className='outline-none border-b-2 border-black w-full px-3 py-2 tracking-wider' />
                    <input
                        type='password'
                        placeholder='Password'
                        className='outline-none border-b-2 border-black w-full px-3 py-2 tracking-wider' />
                    <input
                        type='password'
                        placeholder='Password Retry'
                        className='outline-none border-b-2 border-black w-full px-3 py-2 tracking-wider' />
                    <button className='w-full border-2 border-black font-semibold py-2 px-3 tracking-wider transition duration-500 ease-in-out hover:bg-black hover:text-white'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register;