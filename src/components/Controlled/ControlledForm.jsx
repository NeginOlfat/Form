import React, {useState } from 'react';
import InputData from './InputData';
import  RadioButten  from './RadioButten';

class ControlledForm extends React.Component{

  constructor(props) {
    super(props);

    this.state = {      
      fname:'Enter Your First Name:',
      lname:'Enter Your Last Name:',
      age:'',
      };
              
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }
   handleChange(e){   
     
    const target = e.target;
    const name = target.name;
    const value=(target.type=='text' || target.type=='number')? target.value : target.checked;
    
    this.setState({
      [name]: value    }); 
  }
  
   handleSubmit(e) {
   e.preventDefault();  
   console.log('You clicked submit.');
   alert('ControlledForm Registration \n FirstName : '+this.state.fname+
   '\n LastName : '+this.state.lname+
   '\n Age : '+this.state.age);
  }

 render(){
  return (
    
    <div>
      <h3>Registration Form</h3>
      <div >
        <form onSubmit={this.handleSubmit}>
          <InputData label='FirstName:' type='text' name='fname' value={this.fname} onChange={this.handleChange} />
          <br />
          <InputData label='LastName:' type='text' name='lname' value={this.lname} onChange={this.handleChange}/>
          <br />
          <RadioButten />
          <br />
          <InputData label='age' type='number' name='age' value={this.age} onChange={this.handleChange} />
          <br/>
          <InputData label='' type='submit' name='submit' />
        </form>

      </div>

    </div>
  )
 }
}

export default ControlledForm
