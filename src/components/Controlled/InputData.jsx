import React from 'react';
import styles from './InputData.module.css';

const InputData= ({label, type, name, value,onChange })=>{

    return(
        <label>
            {label}
            <input
                name={name}  
                defaultValue="Name"
                type={type}
                value={value}
                onChange={onChange}
            />
        </label>
    )
}

export default InputData