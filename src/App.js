import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: '',
      Surname: '',
      Email: '',
      Address: '',
      isSubmitted: false
    }
  }

  handleInputChange(event) {
    const { name, value }  = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    this.setState({ isSubmitted: true })
    event.preventDefault()
    this.props.userAppRequest(this.state)
    const path = `/aftersubmit`
    browserHistory.push({pathname: path, state: this.state})
  }


  render() {
    return (
      <div id="app" className="transition-item">
         <header className="App-header">
           <h1>Register here</h1>
             <h4>Fill the Form</h4>
              <form onSubmit={ (e) => this.handleSubmit(e) } className="form-elements">
                <p>
                  Name:
                  <input type="text" value={this.state.name} name="name" onChange={ (e) => this.handleInputChange(e) } />
                </p>
                <p>
                  Surname:
                  <input type="text" value={this.state.surname} name="surname" onChange={ (e) => this.handleInputChange(e) } />
                </p>
                <p>
                  Email:
                  <input type="text" value={this.state.email} name="email" onChange={ (e) => this.handleInputChange(e) } />
                </p>
                <p>
                  Address:
                  <input type="text" value={this.state.address} name="address" onChange={ (e) => this.handleInputChange(e) } />
                </p>
                <Link to={{ pathname: '/aftersubmit', state: { info: this.state }}}><input type="submit" value="Submit" /></Link>
              </form>
        </header>
      </div>
    );
  }
}
