import React from "react";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

export default function PostContent({ postData }) {
  const imagePath = `/images/posts/${postData.slug}/${postData.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={postData.title} image={imagePath} />
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </article>
  );
}
