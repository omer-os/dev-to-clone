import React from "react";
import { getAllDocuments } from "../backend/Functions";
import { PostsCollection } from "../backend/collections";
import PostCard from "../components/common/PostCard";

export default function Home({ data }) {
  JSON.parse(data).map((i) => {
    console.log(i);
  });

  return (
    <div className="mt-4 flex flex-col gap-5">
      {data &&
        JSON.parse(data).map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await getAllDocuments(PostsCollection);

  return {
    props: {
      data: JSON.stringify(data),
    },
  };
};
