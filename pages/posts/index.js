import React, { Fragment } from "react";
import Head from "next/head";
import AllPosts from "../../components/posts/all-post";
import { getAllPots } from "../../lib/posts-util";

export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta
          name="description"
          content="A list of all programming-related posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
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
