import Axios from "axios";
import React, { useState } from "react";
import "./FullPost.css";

const FullPost = (props) => {
  const [isPost, setIsPost] = useState(null);

  const deletePostHandler = () => {
    Axios.delete(`/posts/${props.id}`).then(
      (response) => console.log(response)
    );
  };

  let post = <p style={{ textAlign: "center" }}>Please select a Post</p>;

  if (props.id) {
    post = <p>Loading...</p>;
    if (!isPost || (isPost && isPost.id !== props.id))
      Axios.get(`/posts/${props.id}`).then(
        (response) => {
          setIsPost(response.data);
        }
      );
  }

  if (isPost) {
    post = (
      <div className="full-post">
        <h2>{isPost.title}</h2>
        <p>{isPost.body}</p>
        <div>
          <button className="delete" onClick={deletePostHandler}>
            Delete
          </button>
        </div>
      </div>
    );
  }

  return <>{post}</>;
};
export default FullPost;
