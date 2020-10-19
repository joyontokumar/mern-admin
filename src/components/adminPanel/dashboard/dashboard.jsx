import React, { Component } from 'react'
import App from '../App'
import Footer from '../Footer/Footer'
import IconCards from './IconCards/IconCards'
import { NavLink } from 'react-router-dom';
class dashboard extends Component {
  render() {
    return (
      <App>
        <div className="content-wrapper">
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">My Dashboard</li>
            </ol>
            <IconCards />
          </div>
          <Footer />
        </div>
      </App>
    )
  }

}
export default dashboard