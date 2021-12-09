import React, { memo } from 'react';
import Select from 'react-select';

const MySelect = ({ placeholder, isMulti, options, value, changeSelectHandler }) => (
    <Select
        placeholder={placeholder}
        isMulti={isMulti || false}
        options={options}
        value={value}
        onChange={changeSelectHandler} />
);

export default memo(MySelect);