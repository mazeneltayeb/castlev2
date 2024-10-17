
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import "./nav.css"
import logoimg from "./img/cropped-cropped-Untitled-1-copy-1-1.png"
import { useState } from "react";
function NavBar() {
  const [showNavbar, setShowNavbar]=useState(false)
  const handleShowNavbar=()=>{
   setShowNavbar(!showNavbar)
  }
  
  return (
       
        <div className={`nav  d-flex px-4 sticky-top justify-content-center align-items-center ${showNavbar && "active"}`}>
          <div className="logo text-white">
        <img src={logoimg} alt="Error"/>
          </div>
            <ul className={` list-unstyled d-flex ms-auto my-auto ${showNavbar && "active"}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li >
              <Link to="/about">About</Link>
              </li>
              <li>
              <Dropdown>
                <Dropdown.Toggle className="nav-dropdown"  id="dropdown-basic">
                  Gallery
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Salon</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Bed Room</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Cabinet</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Accessories</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Cansol</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Chair</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Chazlong</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Clock</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Dining Room</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Fram</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Living Room</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </li>
              <li >
              <Link>Contact us</Link>
              </li>
            </ul>
            <div className="nav-bar-icon">
          <div className={`open-bar ${showNavbar && "active"}`} onClick={handleShowNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
        </div>
  );
}

export default NavBar;