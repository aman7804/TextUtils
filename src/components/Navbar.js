    import React from 'react'
    // import {Link} from "react-router-dom"
    import PropTypes from 'prop-types'
    export default function Navbar(props){
        return (
            <>
                <nav className="navbar navbar-expand-lg" style={props.mode}>
                    <div className="container-fluid">
                        <a className="navbar-brand" style={props.mode} href="#">{props.title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" style={props.mode} href='#'>Home</a>  
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to='/about' style={props.mode}>{props.about}</Link>
                                </li> */}
                            </ul>
                            <div className="form-check form-switch" style={props.mode}>
                                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark-Mode</label>
                            </div>
                        </div>
                    </div>  
                </nav> 
            </>
        )
    }
    Navbar.propTypes = {
        title: PropTypes.string.isRequired,     //isRequired = you must insert this prop/property
        about: PropTypes.string
    }
    Navbar.defaultProps={
        title: 'AppName',
        about: 'about'
    }
