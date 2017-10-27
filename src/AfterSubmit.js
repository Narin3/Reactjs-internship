import React from 'react'
import './AfterSubmit.css'
import { connect } from 'react-redux'


class AfterSubmit extends React.Component {
  constructor(props) {
    super(props)
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
           <h1>Congratulaitons</h1>
                 </header>
          <p>Name: { this.state.name } </p>
          <p>Surname: { this.state.surname } </p>
          <p>Email: { this.state.email } </p>
          <p>Address: { this.state.address } </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Name: state.register.Name,
    Surname: state.register.Surname,
    Email: state.register.Email,
    Address: state.register.Address
  }
}


export default connect(mapStateToProps)(AfterSubmit)
