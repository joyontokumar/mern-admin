import React, { Component } from 'react'
import axios from 'axios'
// import Progress from "react-progress-2";
// import "react-progress-2/main.css"
import { NavLink } from 'react-router-dom'
class IconCards extends Component {

  state = {
    count: ''
  }

  componentDidMount() {
    // Progress.show();
    axios.get('http://localhost:4000/api/posts')
      .then(result => {
        const counts = result.data.count
        this.setState({ count: counts })
      })
    // Progress.hide();
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="card p-3 text-center">
              <h3 className="cart-title">Creative Theme Design</h3>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos dolor, omnis ipsa eos similique consequuntur illo cum dolore cumque provident eum labore non voluptate?</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-3 text-center">
              <h3 className="cart-title">Responsive Design</h3>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos dolor, omnis ipsa eos similique consequuntur illo cum dolore cumque provident eum labore non voluptate?</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card p-3 text-center">
              <h3 className="cart-title">Logo Branding</h3>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos dolor, omnis ipsa eos similique consequuntur illo cum dolore cumque provident eum labore non voluptate?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IconCards