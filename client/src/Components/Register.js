import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Images from "./Images/form.jpg";
import { registerUser } from "./api/register";

const Register = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, work } = e.target;
    if (
      name.value &&
      email.value &&
      password.value &&
      work.value &&
      phone.value
    ) {
      try {
        const res = await registerUser({
          name: name.value,
          phone: phone.value,
          work: work.value,
          password: password.value,
          email: email.value,
        });
        toast.success(res?.data?.message);
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    } else {
      alert("please fill all input boxes");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-5">Please register your account</h1>
        <div className="col-md-5 m-0 mx-auto">
          <form className="rigt-side" onSubmit={(e) => handleSubmit(e)}>
            <div className="col-sm-10 ">
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="name" name="name" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" name="email" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Phone</label>
                <input type="Number" name="phone" class="form-control" />
              </div>

              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" name="password" class="form-control" />
              </div>

              <div class="mb-3">
                <label class="form-label">Work</label>
                <input type="text" name="work" class="form-control" />
              </div>

              <button type="submit">Register</button>
              <ToastContainer />
            </div>
          </form>
        </div>
       <div className="col-md-6">
          <div className="imgset w-750 h-100 mt-5">
            <img src={Images} className="w-75 h-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
