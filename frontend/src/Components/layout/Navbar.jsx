/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Context } from "../../main";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";
import { Toast } from "bootstrap";
import "../../App.css"
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleNavbar = () => {
    setShow(!show);
  };

  const isDashboard = useLocation("http://localhost:5173/dashboard");

  const { mode, setMode, isAuthenticated, user, setisAuthenticated } =
    useContext(Context);

  const navigateto = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault(); //page refresh na ho
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        { withCredentials: true }
      );
      isAuthenticated(false);
      Toast.success(data.message);
      navigateto("/");
    } catch (error) {
      Toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <section
        className={
          isDashboard.pathname == "/dashboard"
            ? "hideNavbar"
            : mode === "light"
            ? "header light-navbar"
            : "header dark-navbar"
        }
      >
        <nav>
          <div className="logo">
            Tech<span>Blog</span>
          </div>
          <div className={show ? "links show" : "links"}>
            <ul>
              <li>
                <Link to={"/"} onClick={handleNavbar}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/blogs"} onClick={handleNavbar}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to={"/authors"} onClick={handleNavbar}>
                  All Authors
                </Link>
              </li>
              <li>
                <Link to={"/about"} onClick={handleNavbar}>
                  About
                </Link>
              </li>
            </ul>
            <div className="btns">
              <button
                onClick={() =>
                  mode === "light" ? setMode("dark") : setMode("light")
                }
                className={
                  mode == "light" ? "mode-btn light-mode" : "mode-btn dark-mode"
                }
              >
                {mode === "light" ? (
                  <CiLight className="light-icon" />
                ) : (
                  <MdDarkMode className={"dark-icon"} />
                )}
              </button>
              {isAuthenticated && user.role === "Author" ? (
                <Link
                  to={"/dashboard"}
                  onClick={handleNavbar}
                  className="dashboard-btn"
                ></Link>
              ) : (
                ""
              )}
              {!isAuthenticated ? (
                <Link
                  to={"/login"}
                  onClick={handleNavbar}
                  className="login-btn"
                >
                  LOGIN
                </Link>
              ) : (
                <button onClick={handleLogout} className="logout-btn">
                  LOGIN
                </button>
              )}
            </div>
          </div>
          <RxHamburgerMenu className="hamburger" onClick={handleNavbar} />
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
