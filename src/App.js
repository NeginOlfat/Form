import React, {useState } from 'react';
import styles from './App.module.css';
import {ControlledForm} from './components';
import Uncontrolled from './components/Uncontrolled/Uncontrolled';


function App() {

  return (
  <div>
    <div className={styles.ControlledForm}>
     <h2>ControlledForm</h2>
     <ControlledForm/>
    </div>

    <div className={styles.UncontrolledForm}>
      <h2>UNControlledForm</h2>
      <Uncontrolled/>
    </div>
</div>
    
  )
}

export default App
