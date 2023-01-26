import Post, { PostType } from "./Post";
import Theme from "./Theme";

const posts: PostType[] = [
  {
    id: 1,
    title: "Post1",
    content: "Nice Post",
  },
  {
    id: 2,
    title: "Post2",
    content: "Good Post",
  },
  {
    id: 3,
    title: "Post3",
    content: "Awesome Post",
  },
];

const Home = () => {
  return (
    <Theme>
      {posts.map((currPost, idx) => (
        <Post key={idx} post={currPost} />
      ))}
    </Theme>
  );
};

export default Home;
