import React from "react";
import { Link } from "react-router-dom";
const Hero = (props) => {
  return (
    <div className="hero min-h-[90vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className=" text-6xl md:text-8xl font-bold font-exo">
            T
            <span className="inline-block border-[10px] md:border-[15px] border-primary w-[1.5em] h-[.74em] rounded-full"></span>
            DOO
          </h1>
          <p class="py-6">Todo app with double the O's</p>
          <Link
            className="btn btn-primary btn-wide"
            to={props.loggedIn ? "/dashboard" : "/login"}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
