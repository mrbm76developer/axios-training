import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectPost, setSelectPost] = useState();
  const [error, setError] = useState(false);

  const requestApi = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) =>
        setPosts(
          response.data.slice(0, 4).map((item) => {
            return {
              ...item,
              author: "Mohammad",
            };
          })
        )
      )
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    requestApi();
  }, []);

  const selectPostHandler = (id) => {
    setSelectPost(id);
  };
  let itemsPost = <p>Fetching data field</p>;
  if (!error) {
    itemsPost = posts.map((item) => (
      <Post
        key={item.id}
        id={item.id}
        title={item.title}
        author={item.author}
        onClick={() => selectPostHandler(item.id)}
      />
    ));
  }

  return (
    <div>
      <section className="posts">{itemsPost}</section>
      <section>
        <FullPost id={selectPost} />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
};

export default Blog;
