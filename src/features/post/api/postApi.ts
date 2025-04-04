import { IPostComments, IPostData, TypePostsData } from "@shared/types/interface";
export type TypeData = { posts: TypePostsData; totalPosts: number };

class PostApi {
  private url: string = "https://jsonplaceholder.typicode.com/posts";

  async getPosts(
    page: number,
    postsPerPage: number
  ): Promise<TypeData | string> {
    try {
      const response = await fetch(this.url);
      if (!response || response.status !== 200) {
        throw new Error("Error request data");
      }
      const data = await response.json();
      if (!data || typeof data !== "object") {
        throw new Error("Error request data");
      }

      const start = (page - 1) * postsPerPage;
      const paginatedPosts = data?.slice(start, start + postsPerPage);
      return {
        posts: paginatedPosts,
        totalPosts: data.length,
      };
    } catch (error: any) {
      return error.message;
    }
  }
  async getPostById (id:number): Promise<IPostData> {
    try {
      const response = await fetch((this.url += `/${id}`));
      if (!response || response.status !== 200) {
        throw new Error("Error request data");
      }
      const data = await response.json();
  
      const postsComments = data;
      return postsComments;
    } catch (error: any) {
      return error.message;
    }

  }
  async getPostComments(id: number): Promise<IPostComments[]> {
    try {
      const response = await fetch((this.url += `/${id}/comments`));
      if (!response || response.status !== 200) {
        throw new Error("Error request data");
      }
      const data = await response.json();

      const postsComments = data;
      return postsComments;
    } catch (error: any) {
      return error.message;
    }
  }
}

export default new PostApi();
