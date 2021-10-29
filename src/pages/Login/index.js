import React from 'react'
import logo from "../../assets/icons/logo_full.png"
import "./login.css"

const Login = () => {
  return (
    <div>
      <nav className="mb-3 navbar navbar-expand-md navbar-light bg-light">
        <a href="/" className="active navbar-brand">
          <img alt="" src={logo} width="100" height="60" className="d-inline-block align-top" /> </a>
        <button type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="justify-content-end navbar-collapse collapse">
          <div className="navbar-nav">
            <a href="/login" data-rb-event-key="/login" className="active nav-link active">Login</a>
          </div>
        </div>
      </nav>
      <div className="Login">
        <form className="">
          <div className="form-group">
            <label className="form-label" for="user_name">Username</label>
            <input type="user_name" id="user_name" className="form-control" value="" />
          </div>
          <div className="form-group">
            <label className="form-label" for="password">Password</label>
            <input type="password" id="password" className="form-control" value="" />
          </div>
          <button disabled="" type="submit" className="LoaderButton  btn btn-info btn-block btn-lg">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
