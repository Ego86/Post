import { IPostComments } from "@/shared/types/interface"
import styles from "./comment.module.scss"
export const Comment = ({comment}: {comment: IPostComments}) => {
return (
<section className={styles.commentWrapper}>
    <h3>{comment.name}</h3>
    <p>{comment.body}</p>
</section>
)
}
