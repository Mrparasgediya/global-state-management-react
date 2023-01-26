import { useContext } from "react";
import RouteContext from "./RouteContext";

export interface PostType {
  id: number;
  title: string;
  content: string;
}

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const { setRouteName } = useContext(RouteContext);
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={setRouteName.bind(this, "profile")}>
        Go To Profile
      </button>
    </div>
  );
};

export default Post;
