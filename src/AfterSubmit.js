import React from 'react'
import './AfterSubmit.css'
import App from './App'
import { connect } from 'react-redux'
import { userAppRequest } from './actions/appActions.js'

class AfterSubmit extends React.Component {
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
  const { userAppRequest } = this.props
  return(
    <div id="AfterSubmit" className="AfterSubmit-header">
    <App userAppRequest={userAppRequest} />
       <header className="AfterSubmit-header">
           <h1>Congratulaions</h1>
          <p>Name: { this.state.name } </p>
          <p>Surname: { this.state.surname } </p>
          <p>Email: { this.state.email } </p>
          <p>Address: { this.state.address } </p>
        </header>
      </div>
    )
  }
}


export default connect(null, { userAppRequest })(AfterSubmit)
