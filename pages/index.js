import React, { Fragment } from "react";
import Profile from "../components/home-page/profile";
import FeaturedPosts from "../components/home-page/featured-posts";

export default function HomePage() {
  return (
    <Fragment>
      <Profile />
      <FeaturedPosts />
    </Fragment>
  );
}

/* 프로젝트 기능
1. 프로필 화면 => 자기소개
2. 카테고리별 포스트 작성 기능
*/
