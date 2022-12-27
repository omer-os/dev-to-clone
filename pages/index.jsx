import { GettAllPosts } from "../backend/db";
import PostCard from "../components/common/PostCard";
export default function Home({ posts }) {
  return (
    <div className="py-4 flex flex-col gap-5">
      {posts &&
        JSON.parse(posts).map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  const posts = await GettAllPosts();
  return {
    props: {
      posts: JSON.stringify(posts),
    },
  };
};
