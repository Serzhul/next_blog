import React, { Fragment } from "react";
import Head from "next/head";
import Profile from "../components/home-page/profile";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Next Blog</title>
        <meta
          name="description"
          content="사용자 지향의 프로덕트를 만들기 위해 프론트엔드를 공부중인 개발자입니다."
        ></meta>
      </Head>
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
