import instance from 'axios';

const axios = instance.create({ baseURL: process.env.REACT_APP_BACKEND });

export default axios;