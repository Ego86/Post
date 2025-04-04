import { IPostComments } from "@/shared/types/interface";
import styles from "./commentsList.module.scss";
import Comment from "@/features/comment";

export const CommentsList = ({comments}:{comments: IPostComments[]}) => {

    if(typeof comments !== "object" ) {
      return <h1 style={{color: "red"}}>{comments}</h1>
    }

  const List = comments?.map((comment) => {
    return <Comment key={comment.id} comment={comment}></Comment>;
  });
  return <article className={styles.commentsList}>{List}</article>;
};
