import React from "react";
import account from "../../appwrite/config";
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  function signup(e) {
    e.preventDefault();
    if (!user.email || !user.email) {
      return alert("Must Enter Both Email And Password");
    }
    const promise = account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    promise.then(
      function (response) {
        console.log(response);
        navigate("/login");
      },
      function (error) {
        console.log(error);
      }
    );
  }

  function formHandler(e) {
    setUser((prevdata) => {
      return {
        ...prevdata,
        [e.target.name]: e.target.value,
      };
    });
    console.log(user);
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register</h1>
          <p className="py-6"> Fill Info to Register</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                value={user.name}
                onChange={formHandler}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
                value={user.email}
                onChange={formHandler}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                name="password"
                value={user.password}
                onChange={formHandler}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={signup}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
