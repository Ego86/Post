import postApi from "@/features/post/api/postApi";
import Button from "@/shared/ui/button/button";
import { PostsList } from "@/widgets/post";
import { Params } from "next/dist/server/request/params";
import Link from "next/link";
import styles from "./page.module.scss";
import Pagination from "@/features/pagination";
import Header from "@/widgets/header";

const Page = async ({ params }: { params: Promise<Params> }) => {
  const { page } = await params;

  const currentPage = Number(page) || 1;
  const postsPerPage = 10;

  try {
    const postsData = await postApi.getPosts(currentPage, postsPerPage);
    if (typeof postsData === "string") throw new Error(postsData);
    const { posts, totalPosts } = postsData;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    return (
      <>
      <Header/>
        <main className={styles.main}>
          <div className={styles.containerPosts}>
            <PostsList postsData={posts} />
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages}/>
        </main>
      </>
    );
  } catch (error: any) {
    return (
      <main className={styles.main}>
        <h1>Ошибка загрузки данных</h1>
        <p>{error.message}</p>
      </main>
    );
  }
};

export default Page;
