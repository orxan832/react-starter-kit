import React, { useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Moon from '../assets/images/nature.jpg';
import Input from '../components/elements/Input';
import { register } from '../data/inputs.json';
import useForm from '../hooks/form';

const Register = () => {

    const [form, changeFormHandler] = useForm();

    const navigate = useNavigate();

    const renderInputs = useMemo(() => register.map((({ type, title, placeholder, name }) =>
        <Input
            key={name}
            type={type}
            title={title}
            placeholder={placeholder}
            name={name}
            value={form[name]}
            changeFormHandler={changeFormHandler}
        />
    )), [form, changeFormHandler]);

    const submitHandler = useCallback(e => {
        e.preventDefault();
        console.log(form);
        // navigate('/login');
    }, [form, navigate]);

    return (
        <div className='relative md:flex w-full h-screen'>
            <div className='absolute inset-0 md:relative w-full md:flex md:w-1/2 xl:w-3/5'>
                <img src={Moon} alt='logo' className='w-full h-full object-cover' />
            </div>
            <div className='absolute inset-0 z-50 w-full md:relative md:w-1/2 xl:w-2/5 flex flex-col justify-center items-center text-gray-600 tracking-wider md:mx-4'>
                <div className='bg-gray-100 px-8 py-5 mx-4 rounded w-5/6 md:w-full shadow-lg'>
                    <span className='text-center text-lg font-semibold'>Register page</span>
                    <form className='flex flex-col space-y-5 mt-5' onSubmit={submitHandler}>
                        {renderInputs}
                        <Link to='/login' className='text-sm font-semibold text-gray-400 ml-auto'>Dou you have account?</Link>
                        <button type='submit' className='px-5 py-2 bg-gray-700 text-white tracking-wider font-semibold transition duration-500 ease-in-out hover:bg-gray-900'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;