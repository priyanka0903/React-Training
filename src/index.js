import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FormGroup} from 'reactstrap';
import * as serviceWorker from './serviceWorker';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Contact_no: "",
      Dob: "",
      Gender: ""
    };
  }

  setName(event) {
    this.setState({
    Name: event.target.value 
    });
  }

  setEmail(event){
    this.setState({
      Email: event.target.value
    });
  }

  setContactNo(event){
    this.setState({
      Contact_no: event.target.value
    });
  }

  setDob(event){
    this.setState({
      Dob: event.target.value
    });
  }

  setGender(event){
    this.setState({
      Gender: event.target.value
    });
  }
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <FormGroup>
        <label htmlFor="username">Enter Name: </label>
        <input type="text" value={this.state.Name} placeholder="Enter you First Name" onChange={this.setName.bind(this)}/>
      </FormGroup>

      <FormGroup>
        <label htmlFor="email">Enter your email Id: </label>
        <input id="email" name="email" type="email" onChange={this.setEmail.bind(this)}/>
      </FormGroup>

      <FormGroup>
        <label htmlFor="Contact No">Enter your Contact No</label>
        <input id="contact_no" name="contact_no" type="text" placeholder="Enter Contact No" onChange={this.setContactNo.bind(this)}/>
      </FormGroup>

      <FormGroup> 
        <label htmlFor="Dateofbirth">Select your Date of Birth</label>
        <input id="Dob" name="Dob" type="date" onChange={this.setDob.bind(this)}/>
      </FormGroup>

      <FormGroup>
      <div onChange={this.setGender.bind(this)}>
        <label htmlFor="Gender">Select Gender</label>
        <input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female
      </div>
      </FormGroup>

        <h3>{this.state.Name}</h3>
        <h3>{this.state.Email}</h3>
        <h3>{this.state.Contact_no}</h3>
        <h3>{this.state.Dob}</h3>
        <h3>{this.state.Gender}</h3>
        <button>Sumbit</button>
      </form>
    );
  }
}
ReactDOM.render(<MyForm />,document.getElementById('root'));

// ReactDOM.render(<h1>WELCOME TO REACT WORLD !!</h1>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
