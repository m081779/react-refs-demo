import React from 'react';

export default class Form extends React.PureComponent {
  
  handleChange = () => {
    const user = Object.keys(this.refs).reduce((acc, ref) => ({
      ...acc,
      [ref]: this.refs[ref].value
    }), {})
    this.props.updateUser( user );
  }

  clearInputs = () => {
    const user = Object.keys(this.refs).reduce((acc, ref) => {
      this.refs[ref].value = '';
      acc[ref] =  '';
      return acc;
    }, {});
    this.props.updateUser( user );
  }

  render() {
    return(
      <div className='box'>
        <label htmlFor='firstName'>First Name:</label>
        <input onChange={this.handleChange} type="text" name='firstName' ref='firstName'/>
        <label htmlFor='lastName'>Last Name:</label>
        <input onChange={this.handleChange} type="text" name='lastName' ref='lastName'/>
        <label htmlFor='phoneNumber'>Phone Number:</label>
        <input onChange={this.handleChange} type="text" name='phoneNumber' ref='phoneNumber'/>
        <label htmlFor='age'>Age:</label>
        <input onChange={this.handleChange} type="text" name='age' ref='age'/>
        <button onClick={this.clearInputs}>Clear Inputs</button>
      </div>  
    )
  }
}