import { IPostData } from "@/shared/types/interface"
import styles from "./post.module.scss"
import Link from "next/link"
export const Post = ({postData}:{postData: IPostData}) => {

   return (
    <>
        <Link className={styles.postContainer} href={`/post/${postData.id}`}>
        <section >
            <h2>{postData.title}</h2>
            <p>{postData.body}</p>
        </section>
        </Link>
    </>
)
}

