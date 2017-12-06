import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        // console.log(this.props)
        // const {login} = this.props
        let path
        //
        // if (Object.keys(login).length > 0)
        //     if (login.is_staff)
        //         path = {pathname: '/'}
        //     else
        //         path = {
        //             pathname: '/student',
        //             state: {login: login.user_info}
        //         }
        // else
        path = {pathname: '/'}


        return (
            <div className="header">
                <nav className="navbar navbar-inverse navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar"
                                    aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">Tracking Progress</a>

                        </div>
                        <div id="navbar" className="navbar-collapse collapse" aria-expanded="true">
                            <ul className="nav navbar-nav">
                                <li><Link to={path}>Home</Link></li>
                                {/*<li><Link to={path}>Student</Link></li>*/}
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}