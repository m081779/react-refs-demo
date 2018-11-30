import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import DisplayUser from './components/DisplayUser'


class App extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      age: ''
    }
  }
  updateUser = async( user ) => {
    await this.setState({ user })
  }


  render() {
    return (
      <div className="App">
        <Form updateUser={this.updateUser}/>
        <DisplayUser user={this.state.user}/>
      </div>
    );
  }
}

export default App;
