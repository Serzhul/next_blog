import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // 파일 확장자 제거 후, 파일 이름을 slug로 가져옴
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent); // Return Object(data, content) => Metadata와 content 분리

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPots() {
  const postFiles = getPostsFiles();
  //   for (const postFile of postFiles) {
  //     const postData = getPostData(postFile);
  //   }

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  ); //

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPots();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
