import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (

<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{backgroundColor: 'black', height: '100px'}} >
          <Link className="navbar-brand" style={{color: 'white', fontFamily: 'cursive', fontSize:'30px'  , marginTop: '30px'}} to="#">The Barber's Shop</Link>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-15">
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{color: 'white', marginLeft:'800px', fontSize:'20px'}} to="/">Appointment</Link>
              </li> */}
              
              <li className="nav-item">
                <Link className="nav-link" style={{color: 'white', fontSize:'20px', marginLeft:'600px'}} to="/Service">Service</Link>
              </li>
              <li>
                <h1 style={{color: 'white', fontSize: '35px'}}> | </h1>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: 'white', fontSize:'20px'}} to="/Branch">Branch</Link>
              </li>
              <li>
                <h1 style={{color: 'white', fontSize: '35px'}}> | </h1>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: 'white', fontSize:'20px'}} to="/Manager">Manager</Link>
              </li>
              <li>
                <h1 style={{color: 'white', fontSize: '35px'}}> | </h1>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: 'white', fontSize:'20px'}} to="/Customer">Customer</Link>
              </li>
              <li>
                <h1 style={{color: 'white', fontSize: '35px'}}> | </h1>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: 'white', fontSize:'20px'}} to="/Appointment">Appointment</Link>
              </li>
              <li>
                <h1 style={{color: 'white', fontSize: '35px'}}> | </h1>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: 'white', fontSize:'20px'}} to="/">Logout</Link>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav> 
  )
}

export default Navbar;