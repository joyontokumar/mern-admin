import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from '../adminPanel/dashboard/dashboard'
import AddDoctor from '../adminPanel/addDoctor/addDoctor'
import AddFaculty from '../adminPanel/addCategory/addCategory'
class appRoute extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/adddoctor" component={AddDoctor} />
                    <Route path="/addfaculty" component={AddFaculty} />
                </Switch>
            </Router>
        )
    }
}

export default appRoute