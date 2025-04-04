import postApi from "@/features/post/api/postApi";
import CommentsList from "@/widgets/commentsList";
import { Params } from "next/dist/server/request/params";
import styles from "./page.module.scss";
import { IPostComments } from "@/shared/types/interface";
import Link from "next/link";
import Header from "@/widgets/header";
// import { NextSeo } from "next-seo";
//Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app
// See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.
//  ⨯ [TypeError: Cannot read properties of null (reading 'useContext')] {
//   digest: '1776150244'
// }
//
//

const comments: IPostComments[] = [
  {
    id: 1,
    body: "Hello, Post",
    name: "artem",
  },
  {
    id: 2,
    body: "hello Post",
    name: "vasa",
  },
  {
    id: 3,
    body: "Hello, NextJS",
    name: "semen",
  },
] as const;
const Post = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  const post = await postApi.getPostById(Number(id));
  // const comments = await postApi.getPostComments(Number(id));
  // при 2 запросах сервер jsonplaceholder не выдает данные
  return (
    <>
      {/* <NextSeo title={post.title} description={post.body}/> */}
      <Header />
      <main className={styles.main}>
        <Link className={styles.back} href="/1">
          Back
        </Link>
        <section className={styles.containerPost}>
          <div className={styles.titleWrapper}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
          <CommentsList comments={comments} />
        </section>
      </main>
    </>
  );
};

export default Post;
