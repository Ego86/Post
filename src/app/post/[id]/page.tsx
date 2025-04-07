import postApi from "@/features/post/api/postApi";
import CommentsList from "@/widgets/commentsList";
import { Params } from "next/dist/server/request/params";
import styles from "./page.module.scss";
import { IPostComments } from "@/shared/types/interface";
import Link from "next/link";
import Header from "@/widgets/header";
import { ArticleJsonLd, ProductJsonLd } from "next-seo";

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
  const date = JSON.stringify(new Date().getUTCDate())
  return (
    <>
      <ArticleJsonLd
        url={`http://localhost:3000/post/${post.id}`}
        authorName={post.title}
        useAppDir={true}
        title={post.title}
        description={post.body}
        productName={post.title}
        images={[]}
        datePublished={date}
      />
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
