import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { postSelectors, removeOnePost } from "../redux/slices/postSlice";

export interface PostBoxProps {
  id: number;
}

const PostBox: FC<PostBoxProps> = ({ id }) => {
  const post = useAppSelector((state) => postSelectors.selectById(state, id));
  const dispatch = useAppDispatch();
  const onDeleteClcik = () => {
    dispatch(removeOnePost(id));
  };
  return (
    <div>
      {post && (
        <div style={{ border: "1px solid lightgray", margin: "10px" }}>
          <h2>{post.title}</h2>
          <h6>{post.id}</h6>
          <p>{post.body}</p>
          <button onClick={onDeleteClcik}>delete</button>
        </div>
      )}
    </div>
  );
};

export default PostBox;
