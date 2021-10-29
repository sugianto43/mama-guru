import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo_full.png"

const HeaderHome = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const login = localStorage.getItem("success");
  const handleLogout = () => {
    localStorage.clear();
  }

  const handleToggleNavbar = () => {
    setShow(!show)
  }
  return (
    <div>
      <nav className="mb-3 navbar navbar-expand-md navbar-light bg-light">
        <a href="/" className="active navbar-brand">
          <img alt="" src={logo} width="100" height="60" className="d-inline-block align-top" />
        </a>
        <button onClick={handleToggleNavbar} type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`justify-content-end navbar-collapse collapse ${show && "show"}`}>
          {login ? (
            <div className="navbar-nav">
            <a href="/reports" data-rb-event-key="/reports" className={`${location.pathname === "/reports" && "active"} nav-link`}>Reports</a>
            <a href="/offers" data-rb-event-key="/offers" className={`${location.pathname === "/offers" && "active"} nav-link`}>Offers</a>
            <a href="/payment" data-rb-event-key="/payment" className={`${location.pathname === "/payment" && "active"} nav-link`}>Payments</a>
            <a href="/settings" data-rb-event-key="/settings" className={`${location.pathname === "/settings" && "active"} nav-link`}>Settings</a>
            <a href="?#" className="nav-link" role="button" onClick={handleLogout}>Logout</a>
          </div>
          ) :(
          <div className="navbar-nav">
            <a href="/login" data-rb-event-key="/login" className="nav-link active">Login</a>
          </div>)}
        </div>
      </nav>
    </div>
  )
}

export default HeaderHome
