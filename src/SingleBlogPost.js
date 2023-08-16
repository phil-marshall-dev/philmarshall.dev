import React from "react";
import posts from "./posts";
import BlogPost from "./BlogPost";
import { useParams } from "react-router-dom";

export default function SingleBlogPost() {
  const { slug } = useParams();
  const post = posts.filter(post => post.slug === slug)[0];

  if (post) {
    return (
      <div class="jumbotron">
        <div class="container">
          <BlogPost
            title={post.title}
            author={post.author}
            date={post.date}
            content={post.content}
            slug={post.content}
          />
        </div>
      </div>
    );
  }
}