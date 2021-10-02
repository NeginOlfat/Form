import React from "react";
import InputData  from "./InputData";
import styles from "./RadioButten.module.css";

const RadioButten = () => {

   

        return (
    
          <div className={styles.gender}>
            <p>Gender :</p>
            <InputData label="Male" type="radio" value="Male" name="gender" />

            <InputData label="Female" type="radio" value="Female" name="gender" />

            <InputData label="Other" type="radio" value="Other" name="gender" />
            
          </div>
    
        );
    
}

export default RadioButten