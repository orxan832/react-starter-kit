import { useCallback, useState } from 'react';

const useForm = () => {

    const [form, setForm] = useState({});

    const changeFormHandler = useCallback(e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value })), []);

    return [form, changeFormHandler];
}

export default useForm;