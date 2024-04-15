/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Context } from '../../main'
import HeroSection from '../miniComponents/HeroSection';
import TrendingBlogs from "../miniComponents/TrendingBlog";
import LatestBlogs from "../miniComponents/LatestBlog";
import PopularAuthors from "../miniComponents/PopularAuthor";

const Home = () => {
  const {mode} = useContext(Context);
  return (
    <article className={
      mode ==="dark"?"dark-bg" : "light-bg"}>
        <HeroSection />
        <TrendingBlogs />
        <LatestBlogs />
        <PopularAuthors />
    </article>
  )
}

export default Home
