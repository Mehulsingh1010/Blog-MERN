/* eslint-disable no-unused-vars */
import React from 'react'
import "./App.css"
import {BrowserRouter as Router ,Route, Routes} from "react-router-dom"
import Home from "./Components/pages/Home"
import Register from './Components/pages/Register'
import Login from "./Components/pages/Login"
import Blogs from "./Components/pages/Blogs"
import SingleBlog from "./Components/pages/SingleBlog"
import About from "./Components/pages/About"
import AllAuthors from "./Components/pages/AllAuthors"
import Dashboard from "./Components/pages/Dashboard"
import UpdateBlog from "./Components/pages/UpdateBlog"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/register" element={<Register/> }/>
          <Route path="/login" element={<Login /> }/>
          <Route path="/blogs" element={<Blogs/> }/>
          <Route path="/blog/:id" element={<SingleBlog/> }/>
          <Route path="/about" element={<About/> }/>
          <Route path="/authors" element={<AllAuthors/> }/>
          <Route path="/dashboard" element={<Dashboard/> }/>
          <Route path="/bblog.update.:id" element={<UpdateBlog/> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
