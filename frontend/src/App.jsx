/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home";
import Register from "./Components/pages/Register";
import Login from "./Components/pages/Login";
import Blogs from "./Components/pages/Blogs";
import SingleBlog from "./Components/pages/SingleBlog";
import About from "./Components/pages/About";
import AllAuthors from "./Components/pages/AllAuthors";
import Dashboard from "./Components/pages/Dashboard";
import UpdateBlog from "./Components/pages/UpdateBlog";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import { Context } from "./main";
import axios from "axios";
import { Toaster } from "react-hot-toast";
const App = () => {
  const { setUser, isAuthenticated, setIsAuthenticated, user, setBlogs } =
    useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/myprofile",
          {
            withCredentials: true,
          }
        );
        setUser(data.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser({});
      }
    };
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/blog/all",
          { withCredentials: true }
        );
        setBlogs(data.allBlogs);
      } catch (error) {
        setBlogs([]);
      }
    };
    fetchUser();
    fetchBlogs();
  }, [isAuthenticated, user]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<AllAuthors />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog/update/:id" element={<UpdateBlog />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};
export default App;
