import React, { Component } from 'react'
import App from '../App'
import Footer from '../Footer/Footer'
import Form from './Form'
import { NavLink } from 'react-router-dom';
class addPost extends Component {
  render() {
    return (
      <App>
        <div className="content-wrapper">
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink to="/">Dashboard</NavLink>
              </li>
              <li className="breadcrumb-item active">Add Doctor</li>
            </ol>
            <div className="container-fluid">
              <div className="row">
                <Form />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </App>
    )
  }

}
export default addPost