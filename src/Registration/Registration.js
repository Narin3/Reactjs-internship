import React, { Component } from 'react'

class Registration extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      registrationName: '',
      registrationSurname: '',
      registrationEmail: '',
      registrationAddress: '',
      submitted: false
    }
  }

  handleChange(event) {
    this.setState({registrationName: event.target.registrationName})
    this.setState({registrationSurname: event.target.registrationSurname})
    this.setState({registrationEmail: event.target.registrationEmail})
    this.setState({registrationAddress: event.target.registrationAddress})
  }

  handleSubmit(c) {
    this.setState({submitted: true})
    console.log(this.state.registrationName)
    c.preventDefault()
  }

  render() {
    const isSubmitted = this.state.submitted
    let formMeta = null
    if (isSubmitted) {
      formMeta = <span>Name: {this.state.registrationName}</span>
    }

    return  (
      <div>
          <form onSubmit = { (c) => this.handleSubmit (c) }>
            <p>
            Name:
              <input
              type="text" value={this.state.registrationName} onChange={(e) => this.handleChange(e)} placeholder="name" /></p>
              <p>
            Surname:
              <input
              type="text" value={this.state.registrationSurname} onChange={(e) => this.handleChange(e)} placeholder="surname" /></p>
              <p>
              Email:
              <input
              type="text" value={this.state.registrationEmail} onChange={(e) => this.handleChange(e)} placeholder="email" /></p>
              <p>
              Address:
              <input
              type="text" value={this.state.registrationAddress} onChange={(e) => this.handleChange(e)} placeholder="country, city" /></p>
            <button type="submit" value="Submit" onSubmit={this.handleSubmit.bind(this)}>Submit</button>
          </form>
          { formMeta }
      </div>
    )
  }
}

export default Registration
