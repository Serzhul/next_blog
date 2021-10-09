import React from "react";
import AllPosts from "../../components/posts/all-post";
import { getAllPots } from "../../lib/posts-util";

export default function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPots();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 100,
  };
}
