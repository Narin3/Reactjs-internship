import React from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux'
import { push } from "react-router-redux"
import './App.css';


class App extends React.Component {
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

  handleChange(event) {
    const { name, value }  = event.target
    this.setState({
      [name]: value
    })
    this.props.updateApp(e.target.name, e.target.value)
  }

  handleSubmit(event) {
    this.setState({ isSubmitted: true })
    event.preventDefault()
    this.props.Registration(this.state)
    const path = `/aftersubmit`
    browserHistory.push({pathname: path, state: this.state})
  }


  render() {
    return (
      <div id="app" className="transition-item">
         <header className="App-header">
           <h1>Register here</h1>
             <h4>Fill the Form</h4>
              <form onSubmit={ (e) => this.handleSubmit(e) } className="flex">
                <p>
                  <input type="text" value={this.state.name} name="name" placeholder="Name" onChange={ (e) => this.handleChange(e) } />
                </p>
                <p>
                  <input type="text" value={this.state.surname} name="surname" placeholder="Surname" onChange={ (e) => this.handleChange(e) } />
                </p>
                <p>
                  <input type="text" value={this.state.email} name="email" placeholder="Email" onChange={ (e) => this.handleChange(e) } />
                </p>
                <p>
                  <input type="text" value={this.state.address} name="address" placeholder="Address" onChange={ (e) => this.handleChange(e) } />
                </p>
                <Link to={{ pathname: '/aftersubmit', state: { info: this.state }}}><input type="submit" value="Submit" /></Link>
              </form>
        </header>
      </div>
    );
  }
};

const state = (state.ownProps = {}) => {
  return {
    Name: state.register.Name,
    Surname: state.register.Surname,
    Email: state.register.Email,
    Address: state.register.Address
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateApp: (key, value) => {
    dispatch( { type: "REGISTER_FORM_UPDATE", key, value })
  }
})

export default connect(state, mapDispatchToProps)(App)
