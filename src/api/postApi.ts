import { Post } from "../redux/slices/postSlice";

const getAllPosts = async (): Promise<Post[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/posts"
  );
  return response.json();
};

export default {
  getAllPosts,
};
