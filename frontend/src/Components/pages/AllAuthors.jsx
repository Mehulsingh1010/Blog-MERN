import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import { BeatLoader, BounceLoader } from "react-spinners";

const AllAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const { mode } = useContext(Context);
  useEffect(() => {
    const fetchAuthors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/authors",
        { withCredentials: true }
      );
      setAuthors(data.authors);
    };
    fetchAuthors();
  }, []);

  return (
    <article
      className={
        mode === "dark" ? "dark-bg all-authors" : "light-bg all-authors"
      }
    >
      <h2>ALL AUTHORS</h2>
      <div className="container">
        {authors && authors.length > 0 ? (
          authors.map((author) => {
            return (
              <div className="card" key={author._id}>
            {author.avatar && author.avatar.url ? (
              <img src={author.avatar.url} alt="author" />
            ) : (
              <div>No Image Available</div>
            )}
            <p>{author.name}</p>
            <p>{author.role}</p>
          </div>
            );
          })
        ) : (
          <BeatLoader color="gray" size={50} style={{ padding: "200px 0" }} />
        )}
      </div>
    </article>
  );
};

export default AllAuthors;