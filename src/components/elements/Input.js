import React, { memo } from 'react'

const Input = ({ type, title, placeholder, name, value, changeFormHandler }) => {
    console.log('ok');
    return (
        <div className='flex flex-col'>
            <label htmlFor={name} className='text-sm font-semibold text-gray-400'>{title}</label>
            <input
                type={type}
                placeholder={placeholder}
                className='bg-gray-100 py-2 outline-none border-b border-gray-300 tracking-wider'
                id={name}
                name={name}
                value={value || ''}
                onChange={changeFormHandler} />
        </div>
    )
}

export default memo(Input);