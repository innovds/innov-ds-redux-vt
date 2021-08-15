import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import PostBox from "./components/PostBox";
import { getAllPosts, postSelectors } from "./redux/slices/postSlice";

function App() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(postSelectors.selectAll);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div className="App">
      {posts ? (
        <>
          {posts.map((post) => (
            <PostBox id={post.id} key={post.id} />
          ))}
        </>
      ) : (
        <div>no posts</div>
      )}
    </div>
  );
}

export default App;
