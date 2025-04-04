export interface IPostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export type TypePostsData = IPostData[];

export interface IPostComments {
  postId?: number;
  id?: number;
  name?:string;
  email?: string;
  body?: string;
}

export interface IUser {
  id?: number;
  login: string;
  password: string;
}