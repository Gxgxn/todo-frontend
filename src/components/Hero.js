import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div class="hero min-h-[90vh] bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class=" text-6xl md:text-8xl font-bold font-exo">
            T
            <span className="inline-block border-[10px] md:border-[15px] border-primary w-[1.5em] h-[.74em] rounded-full"></span>
            DOO
          </h1>
          <p class="py-6">Todo app with double the O's</p>
          <Link className="btn btn-primary btn-wide" to="/dashboard">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
