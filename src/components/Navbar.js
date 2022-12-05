import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const Navbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-between">
      {/* <a className="btn btn-ghost normal-case text-xl">TOODOO</a> */}
      <Link className="btn btn-ghost normal-case text-2xl" to="/">
        T
        <span className="inline-block border-[4px] border-primary w-[1.5em] h-[.85em] mt-1 rounded-full"></span>
        DOO
      </Link>
      <div
        class="tooltip tooltip-secondary tooltip-bottom"
        data-tip="Theme Selector"
      >
        <select
          data-choose-theme
          className="select select-ghost w-full max-w-[8rem]"
        >
          <option disabled defaultValue selected>
            Select a theme
          </option>
          <option value="dark">Dark</option>
          <option value="pastel">Pastel</option>
          <option value="coffee">Coffee</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
