import React from 'react';
import styles from './InputData.module.css';

const InputData= (props)=>{

    return(
        <label>
            {props.label}
            <input
                name={props.name}  
                defaultValue="Name"
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />
        </label>
    )
}

export default InputData