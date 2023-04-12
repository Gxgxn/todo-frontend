import React, { useContext } from "react";
import { Link } from "react-router-dom";
import account from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = (props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function login(e) {
    e.preventDefault();
    const promise = account.createEmailSession(user.email, user.password);
    promise.then(
      function (response) {
        console.log(response);
        props.setIsLoggedIn(true);
        navigate("/dashboard");
      },
      function (error) {
        console.log(error);
        alert(error.message);
        setUser({ email: "", password: "" });
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
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login!</h1>
          <p className="py-6">
            Login in to continue ,<br /> if you don't have a account go ahead
            create an account{" "}
            <Link className="link link-info" to="/signup">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
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
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                value={user.password}
                onChange={formHandler}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={login}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
