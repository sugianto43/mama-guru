import axios from 'axios'
import {useHistory} from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { useFetchIf } from '../../helpers/useFetchIf'
import "./login.css"

const Login = () => {
  const history = useHistory()
  const [valueUsername, setValueUsername] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [startFetching, setStartFetching] = useState(false);

  const handleChangeUsername = (e) => {
    setValueUsername(e.target.value);
  }

  const handleChangePassword = (e) => {
    setValuePassword(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setStartFetching(true);
  }
  const { response, loading } = useFetchIf({
    url: "/api/auth/auth",
    method: "POST",
    body: {
      user_name: valueUsername,
      password: valuePassword
    },
    startFetching
  })

  useEffect(() => {
    if (response) {
      if(response.success){
        localStorage.setItem("display_name", response.display_name)
        localStorage.setItem("user_id", response.user_id)
        localStorage.setItem("user_type", response.user_type)
        localStorage.setItem("success", response.success)
        history.push("/reports")
        setStartFetching(false)
        console.log("response sukses", response.success)
      } else {
        alert(response.message)
        setStartFetching(false)
      }
    }
  }, [response])

  console.log("loading login", loading)
  console.log("login", response)
  return (
    <div>
      <div className="Login">
        <form className="">
          <div className="form-group">
            <label className="form-label" for="user_name">Username</label>
            <input
              type="user_name"
              id="user_name"
              className="form-control"
              value={valueUsername}
              onChange={handleChangeUsername}
            />
          </div>
          <div className="form-group">
            <label className="form-label" for="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={valuePassword}
              onChange={handleChangePassword}
            />
          </div>
          <button
            disabled={!valueUsername || !valuePassword}
            type="submit"
            className="LoaderButton  btn btn-info btn-block btn-lg"
            onClick={handleLogin}
          >
            {loading ? "loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
