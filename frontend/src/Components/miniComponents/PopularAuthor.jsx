import axios from "axios";
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const PopularAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/authors",
          { withCredentials: true }
        );
        setAuthors(data.authors);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthors();
  }, []);

  if (loading) {
    return <BeatLoader color="gray" size={30} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="popularAuthors">
      <h3 className="middle1">Popular Authors</h3>
      <div className="container">
        {authors.slice(0, 4).map((author) => (
          <div className="card" key={author._id}>
            {author.avatar && author.avatar.url ? (
              <img src={author.avatar.url} alt="author" />
            ) : (
              <div>No Image Available</div>
            )}
            <p>{author.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularAuthors;
