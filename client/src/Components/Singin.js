import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import Images from "./Images/log1.png";
// import {singinUser} from './api/register'

const Singin = () => {
  // const history = useHistory()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const LoginForm = async (e) => {
    alert("Login Sucessfully D");
    e.preventDefault();
    

    const res = await fetch('http://localhost:5000/signin',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email , password
      })
    })
    console.log(res)
    const data = await res.json() 
    console.log(data)
    // history.push('/')
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Login Form</h1>
        <div className="col-md-6">
          <div className="w-100 h-100 mt-5 align-items-center mx-auto">
            <img src={Images} className="w-75 h-75" alt="" />
          </div>
        </div>

        <div className="col-md-5">
          <div className="row">
            <form method="POST" className="logoin-form">
              <div className="col-md-10">
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <NavLink
                    to="#"
                    className="login-btn mt-3 btn btn-primary"
                    onClick={LoginForm}
                  >
                    Submit
                  </NavLink>
                  <br />
                  <NavLink className="reg-link" to="#">
                    Register Now
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singin;
