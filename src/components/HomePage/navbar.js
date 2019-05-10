import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to='/'><img src={process.env.PUBLIC_URL + '/icon.png'} height="40px" width="40px" alt="" />{' '}Task Box</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>
                    <div className="form-inline my-2 my-lg-0">


                        <Link className="btn btn-primary" to='/' role="button">Home</Link>
                        <Link className="btn btn-primary" to='/projects' role="button">Projects</Link>
                        <Link className="btn btn-primary" to='/clients' role="button">Employee</Link>
                        {/* <Link to="/"> Home </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/clients"> Clients</Link> */}



                    </div>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.users
    }
}

export default connect(mapStateToProps)(Navbar)