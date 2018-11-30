import React, { Component } from 'react';
import './App.css';
import { Object } from 'core-js';

const DisplayUser = ({user}) => (
  <div className='user-display box'> 
  <h4>User Data:</h4>
    {
      Object.keys(user).map((property, i) => {
        return (
          <div className='property-list'>{`${property}: ${user[property]}`}</div>
        )
      })
    }
  </div>
)

class App extends Component {

  state = {
    user: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      age: ''
    }
  }
  
  handleChange = async (e) => {
    e.preventDefault();
    const user = Object.keys(this.refs).reduce((acc, ref) => {
      acc[ref] = this.refs[ref].value;
      return acc;
    }, {})
    await this.setState({ user });
    console.log('User: ',  this.state.user);
  }
  render() {
    return (
      <div className="App">
        <form className='box'>
          <label htmlFor='firstName'>First Name:</label>
          <input onChange={this.handleChange} type="text" name='firstName' ref='firstName'/>
          <label htmlFor='lastName'>Last Name:</label>
          <input onChange={this.handleChange} type="text" name='lastName' ref='lastName'/>
          <label htmlFor='phoneNumber'>Phone Number:</label>
          <input onChange={this.handleChange} type="text" name='phoneNumber' ref='phoneNumber'/>
          <label htmlFor='age'>Age:</label>
          <input onChange={this.handleChange} type="text" name='age' ref='age'/>
          <input onChange={this.handleChange} type='submit' value='Submit'/>
        </form>  
        <DisplayUser user={this.state.user}/>
      </div>
    );
  }
}

export default App;
