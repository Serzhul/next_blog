/* slug 형태로 구현
slug란? 고유성을 가지는 웹사이트의 주소를 의미하며 보통 사람이 읽기 쉬운 형태로 작성되고 URL의 끝 부분에 사용된다.
*/

import React from "react";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import PostContent from "../../components/posts/post-detail/post-content";

export default function PostDetailPage(props) {
  return <PostContent postData={props.postData} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false, //
  };
}
