import { TypePostsData } from "@/shared/types/interface"
import Post from "@/features/post"
import styles from "./postList.module.scss"
export const PostsList = ({postsData}: {postsData: TypePostsData}) => {
    
    if(typeof postsData !== "object") throw Error(postsData);

const AllPosts = postsData?.map((postElements) => {
return <Post key={postElements.id} postData={postElements} />
})
return <div className={styles.containerPosts}>
{AllPosts}
</div>
}

