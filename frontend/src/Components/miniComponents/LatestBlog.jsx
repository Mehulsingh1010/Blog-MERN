/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const LatestBlogs = ({ heading = "", newClass = "", blogs = [] }) => {

  return (
    <section
      className={
        newClass && newClass.length > 0 ? "dashboard-blogs blogs" : "blogs"
      }
    >
      <h3>{heading}</h3>
      <div className="container">
        {blogs.length > 0 ? (
          blogs.map((element) => (
            <Link to={`/blog/${element._id}`} className="card" key={element._id}>
              {element.mainImage && element.mainImage.url && (
                <img src={element.mainImage.url} alt="blog" />
              )}
              <span className="category">{element.category}</span>
              <h4>{element.title}</h4>
              <div className="writer_section">
                <div className="author">
                  {element.authorAvatar && (
                    <img src={element.authorAvatar} alt="author_avatar" />
                  )}
                  <p>{element.authorName}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No blogs to display</p>
        )}
      </div>
    </section>
  );
};

export default LatestBlogs;
