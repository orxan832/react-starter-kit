import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { auth } from '../redux/reducers/user';

const Home = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logout = useCallback(() => {
        delete localStorage.token;
        dispatch(auth({}));
        navigate('/login');
    }, [dispatch, navigate]);

    return (
        <div className='flex flex-col justify-center items-center h-screen tracking-widest space-y-5'>
            <span className='text-7xl'>This is home page</span>
            <button className='transition duration-500 ease-in-out border-2 border-black hover:bg-black hover:text-white p-2 w-1/3' onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;