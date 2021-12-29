import React from "react";
import "./FullPost.css";

const FullPost = (props) => {
  // let post = <p>Please select a Post</p>;

  return (
    <div className="full-post">
      <h2>Title</h2>
      <p>Content</p>
      <div>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};
export default FullPost;
