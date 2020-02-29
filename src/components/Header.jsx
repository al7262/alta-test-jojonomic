import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import '../styles/header.css';

// Stateless component for header
const Header = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-red shadow-sm fixed-top header">
                <Link className="navbar-brand mr-5" to="/">
                    <img className="mr-1" src={logo} alt="website-logo"/>
                    <span>SoccerManic</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/area">Find by Area</Link>
                        </li>
                    </ul>
                </div>
                </nav>
        </React.Fragment>
    )
}

export default Header;