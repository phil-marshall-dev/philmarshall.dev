import React from 'react';
import {
  Link
} from "react-router-dom";
import ReactMarkdown from 'react-markdown'
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
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
