import jwt from 'jsonwebtoken';
import { toast } from 'react-toastify';
import axios from './axios';

export const decoder = token => {
    try {
        const decoded = jwt.verify(token, process.env.REACT_APP_JWT_KEY);
        return decoded;
    } catch (err) {
        console.log(err);
        toast.info('Sizin sistemdə qalma müddətiniz bitmişdir. Zəhmət olmasa yenidən giriş edin.')
    }
};

export const setBearer = token => axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;