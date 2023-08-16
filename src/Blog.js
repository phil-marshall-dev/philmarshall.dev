import React from "react";
import posts from "./posts";
import BlogPost from "./BlogPost";

export default function Blog() {
  const blogPosts = posts.map(post => {
    return (
      <BlogPost
        title={post.title}
        author={post.author}
        date={post.date}
        content={post.content}
        slug={post.slug}
      />
    )
  })
  return (
    <div class="jumbotron">
      <div class="container">
        {blogPosts}
      </div>
    </div>
  );
}