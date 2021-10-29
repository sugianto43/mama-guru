import React from 'react'
import logo from "../../assets/icons/logo_full.png"
import "./home.css"

const Home = () => {
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
      <div className="Home">
        <div className="lander">
          <h1>Mamaguru</h1>
          <p className="text-muted">Mamaguru Co-Teaching Network</p>
          <div className="pt-3">
            <a className="btn btn-info btn-lg mr-3" href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
