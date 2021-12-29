import React from 'react'

import './Post.css'

const post = (props) => (
  <article className="post" onClick={props.click}>
    <h1>Title</h1>
    <div>
      <div className="author">Author</div>
    </div>
  </article>
)

export default post
