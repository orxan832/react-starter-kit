import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { auth } from '../redux/reducers/user';
import Modal from '../components/elements/Modal';

const btnClasses = 'transition duration-500 ease-in-out border-2 border-black hover:bg-black hover:text-white p-2 w-1/3';

const Home = () => {

    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logout = useCallback(() => {
        delete localStorage.token;
        dispatch(auth({}));
        navigate('/login');
    }, [dispatch, navigate]);

    const modalHandler = useCallback(() => setModal(prev => !prev), []);

    return (
        <div className='flex flex-col justify-center items-center h-screen tracking-widest space-y-5'>
            <span className='text-7xl'>This is home page</span>
            <button className={btnClasses} onClick={() => setLoading(prev => !prev)}>Load</button>
            <button className={btnClasses} onClick={logout}>Logout</button>
            <button className={btnClasses} onClick={modalHandler}>Modal</button>
            <Modal modalHandler={modalHandler} modal={modal} />
        </div>
    )
}

export default Home;