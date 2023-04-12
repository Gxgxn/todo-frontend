import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { themeChange } from "theme-change";
import account from "../appwrite/config";

const Navbar = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    themeChange(false);
  }, []);

  async function logout() {
    try {
      await account.deleteSession("current");
      props.setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-between">
      {/* <a className="btn btn-ghost normal-case text-xl">TOODOO</a> */}
      <Link className="btn btn-ghost normal-case text-2xl" to="/">
        T
        <span className="inline-block border-[4px] border-primary w-[1.5em] h-[.85em] mt-1 rounded-full"></span>
        DOO
      </Link>
      <div
        className="tooltip tooltip-secondary tooltip-bottom"
        data-tip="Theme Selector"
      >
        <select
          data-choose-theme
          className="select select-ghost w-full max-w-[8rem]"
        >
          <option disabled defaultValue>
            Select a theme
          </option>
          <option value="dark">Dark</option>
          <option value="cmyk">Light</option>
          <option value="coffee">Coffee</option>
        </select>
      </div>
      {props.loggedIn && (
        <button className=" btn btn-secondary btn-sm" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
