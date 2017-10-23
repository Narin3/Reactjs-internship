import React from 'react'
import './AfterSubmit.css'
import PageTransition from 'react-router-page-transition'

export default class AfterSubmit extends React.Component {
  constructor(props) {
    super(props)
    this.state= {}

  }

componentDidMount() {
  this.setState(
    {
      name: this.props.location.state.info.name,
      surname: this.props.location.state.info.surname,
      email: this.props.location.state.info.email,
      address: this.props.location.state.info.address,
    }
  )
}

render() {
  return(
    <div id="AfterSubmit" className="AfterSubmit-header">
       <header className="AfterSubmit-header">
         <h1>Congratulaions</h1>
           </header>
        <p>Name: { this.props.location.state.info.name } </p>
        <p>Surname: { this.props.location.state.info.surname } </p>
        <p>Email: { this.props.location.state.info.email } </p>
        <p>Address: { this.props.location.state.info.address } </p>
      </div>
    )
  }
}
