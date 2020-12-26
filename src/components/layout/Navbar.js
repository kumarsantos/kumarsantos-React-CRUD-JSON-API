import React from "react";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h2 className="navbar-brand mr-4" >
          Admin Pannel
        </h2>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" exact to="/">{/*NavLink is used to navigate one page to other with proper activation style*/}
                <h6>Home</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                <h6>About</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                <h6>Contact</h6>
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
      </div>
    </nav>
  );
};

export default Navbar;
