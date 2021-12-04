import React, { useCallback, useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/Error';
import { ToastContainer } from 'react-toastify';
import { decoder } from './helper/token';
import { auth } from './redux/reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { userDataSelector } from './redux/reselects/user';

const App = () => {

  const { isAuth } = useSelector(userDataSelector);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const checkPathname = useCallback(isAuthorize => {
    const path = window.location.pathname;
    if (isAuthorize) {
      if (path === '/login' || path === '/register') navigate('/');
    } else {
      if (path !== '/login' && path !== '/register') navigate('/login');
    }
  }, [navigate]);

  const checkAuthorization = useCallback(() => {

    const token = localStorage.token;
    if (token) {
      const user = decoder(token);
      if (user) {
        dispatch(auth(user));
        checkPathname(true);
      } else {
        delete localStorage.token;
        checkPathname(false);
      }
    } else checkPathname(false);
  }, [dispatch]);

  useEffect(() => {
    checkAuthorization();
  }, [checkAuthorization]);

  const changeRouting = useMemo(() => isAuth ?
    <>
      <Route path='/' element={<Home />} />
    </> :
    <>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </>,
    [isAuth]);

  return (
    <>
      <Routes>
        {changeRouting}
        <Route path='/*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-right' />
    </>
  )
}

export default App;