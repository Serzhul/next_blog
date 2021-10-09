import React from "react";
import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

export default function AllPosts(props) {
  return (
    <secion className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </secion>
  );
}
