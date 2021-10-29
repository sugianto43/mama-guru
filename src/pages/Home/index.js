import React from 'react'
import "./home.css"

const Home = () => {
  const login = localStorage.getItem("success");
  return (
    <div>
      <div className="Home">
        {login ? (
          <div class="lander">
            <h1>Welcome, Mamaguru Test</h1>
            <p class="text-muted">Mamaguru Co-Teaching Network</p>
          </div>) : (
          <div className="lander">
            <h1>Mamaguru</h1>
            <p className="text-muted">Mamaguru Co-Teaching Network</p>
            <div className="pt-3">
              <a className="btn btn-info btn-lg mr-3" href="/login">Login</a>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default Home
