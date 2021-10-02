import React from "react";

class Uncontrolled extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();  
      this.nameInput=React.createRef();
    }

    handleSubmit(e) {
      e.preventDefault();
      alert(
        `Selected file - ${this.fileInput.current.files[0].name} 
        A name was submitted:  ${this.nameInput.current.value}`   );
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
                 Name:
                <input type="text" ref={this.nameInput} />        
            </label>
            <br/>
            <label>
                Upload file:
                <input type="file" ref={this.fileInput} />        
            </label>
          
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  
export default Uncontrolled