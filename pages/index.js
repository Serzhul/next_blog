import React, { Fragment } from "react";
import Profile from "../components/home-page/profile";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.jpeg",
    excerpt:
      "NextJS is a the React framework for production, It makes building react app with many functions like getStaticProps, Link, Routing and so on. I for got the most important one. The server-side rendering",
    date: "2022-01-31",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.jpeg",
    excerpt:
      "NextJS is a the React framework for production, It makes building react app with many functions like getStaticProps, Link, Routing and so on. I for got the most important one. The server-side rendering",
    date: "2022-01-31",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.jpeg",
    excerpt:
      "NextJS is a the React framework for production, It makes building react app with many functions like getStaticProps, Link, Routing and so on. I for got the most important one. The server-side rendering",
    date: "2022-01-31",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.jpeg",
    excerpt:
      "NextJS is a the React framework for production, It makes building react app with many functions like getStaticProps, Link, Routing and so on. I for got the most important one. The server-side rendering",
    date: "2022-01-31",
  },
];

export default function HomePage() {
  return (
    <Fragment>
      <Profile />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

/* 프로젝트 기능
1. 프로필 화면 => 자기소개
2. 카테고리별 포스트 작성 기능
*/
