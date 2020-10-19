import React, { Component } from 'react'
import App from '../App'
import Addcatform from './addCatForm'
import Showcat from './showCat'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'
class category extends Component {
  render() {
    return (
      <App>
        <div className="content-wrapper">
          <div className="bredcrum-area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <NavLink to="/">Dashboard</NavLink>
                    </li>
                    <li className="breadcrumb-item active">Add Category</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="add-category-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <Addcatform />
                </div>
                <div className="col-md-8">
                  <Showcat />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </App >
    )
  }
}

export default category