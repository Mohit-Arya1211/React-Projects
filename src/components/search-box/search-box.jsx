import React from "react";
import './search-box.css';

export const SeachBox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
    />
);
