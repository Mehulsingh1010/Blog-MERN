/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Context } from '../../main'
import HeroSection from '../miniComponents/HeroSection';
import TrendingBlogs from "../miniComponents/TrendingBlog";
import LatestBlogs from "../miniComponents/LatestBlog";
import PopularAuthors from "../miniComponents/PopularAuthor";
import Blogs from './Blogs';
import insert from '../miniComponents/insert';
import Quote from '../miniComponents/Quote';

const Home = () => {
  const {mode, blogs} = useContext(Context);
  return (
<article className={mode === "dark" ? "dark-bg" : "light-bg"}>
        <HeroSection />
<Quote />
        <TrendingBlogs />
        {/* <LatestBlogs heading={"Latest Blogs"} /> */}
        {/* <Blogs /> */}
        <PopularAuthors />
      </article>
  )
}

export default Home



// published not defined while posting blogs
//  latest blogs not loading: proprs undefined error
//  url not found error in popular authors 