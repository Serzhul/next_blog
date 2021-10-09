import React from "react";
import AllPosts from "../../components/posts/all-post";

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

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
