import React from 'react'
import logo from "../../assets/icons/logo_full.png"

const HeaderHome = () => {
  return (
    <div>
      <nav className="mb-3 navbar navbar-expand-md navbar-light bg-light">
        <a href="/" className="active navbar-brand">
          <img alt="" src={logo} width="100" height="60" className="d-inline-block align-top" />
        </a>
        <button type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="justify-content-end navbar-collapse collapse">
          <div className="navbar-nav">
            <a href="/login" data-rb-event-key="/login" className="nav-link active">Login</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeaderHome
