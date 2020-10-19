import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <NavLink className="navbar-brand" to="/">JOYONTO</NavLink>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                            <NavLink exect className="nav-link" exact to="/"><i className="fa fa-fw fa-dashboard"></i>
                                <span className="nav-link-text">&nbsp;Dashboard</span></NavLink>
                        </li>

                        {/* doctors nav bar */}
                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
                            <NavLink className="nav-link nav-link-collapse collapsed" data-toggle="collapse" to="#collapseComponents" data-parent="#exampleAccordion">
                                <span className="nav-link-text">&#128512;Doctors</span>
                            </NavLink>

                            <ul className="sidenav-second-level collapse" id="collapseComponents">
                                <li>
                                    <NavLink exect to="/adddoctor">Add Doctor</NavLink>
                                </li>
                                <li>
                                    <NavLink exect to="/">All Doctors</NavLink>
                                </li>
                            </ul>
                        </li>

                        {/* Faculty navbar */}

                        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
                            <NavLink className="nav-link nav-link-collapse collapsed" data-toggle="collapse" to="#faculty" data-parent="#exampleAccordion">
                                <i className="fa fa-fw fa-wrench"></i>
                                <span className="nav-link-text">&nbsp;Faculty</span>
                            </NavLink>
                            <ul className="sidenav-second-level collapse" id="faculty">
                                <li>
                                    <NavLink exect to="/addfaculty">Add Faculty</NavLink>
                                </li>
                                <li>
                                    <NavLink exect to="/">All Faculty</NavLink>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu