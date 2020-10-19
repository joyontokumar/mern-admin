import React, { Component } from 'react'
import axios from 'axios'
import Aux from '../../hoc/_Aux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
class Form extends Component {
  render() {
    return (
      <Aux>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Author</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Category</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Tag</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">Image</label>
          <input type="file" className="form-control-file" />
        </div>
        <button type="submit" onClick={this.SendInfo} className="btn btn-primary">Submit</button>
      </Aux>

    )
  }
}
export default Form