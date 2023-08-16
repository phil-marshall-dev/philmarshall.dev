import React from 'react';
import {
  Link
} from "react-router-dom";
const BlogPost = ({ title, author, date, content, slug }) => {
  return (
    <div className="blog-post">
      <h2>
        <Link to={`/blog/${slug}`}>
          {title}
        </Link>
      </h2>
      <p>By {author} on {date}</p>
      <div className="post-content">
        {content}
      </div>
    </div>
  );
};

export default BlogPost;
