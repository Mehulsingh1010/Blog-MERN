import React, { useContext } from "react";
import { Context } from "../../main";
import LatestBlogs from "../miniComponents/LatestBlog";
const Blogs = () => {
  const { mode, blogs } = useContext(Context);

  return ( <>
  <h3 className="shift">Latest Blogs </h3>
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <LatestBlogs blogs={blogs} title={"Blogs"} />
    </article>
    </>
  );
};

export default Blogs;