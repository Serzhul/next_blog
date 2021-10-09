import React, { Fragment } from "react";
import Profile from "../components/home-page/profile";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <Fragment>
      <Profile />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

/* 프로젝트 기능
1. 프로필 화면 => 자기소개
2. 카테고리별 포스트 작성 기능
*/

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 100,
  };
}
