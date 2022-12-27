import { useEffect } from "react";
import { getAllPosts } from "../backend/testdb";

export default function Test({data}) {
  return <div className="p-3 flex flex-wrap gap-4">
    {
      JSON.parse(data).map((i)=>(
        <p>{i.postContent}</p>
      ))
    }
  </div>;
}

export const getServerSideProps = async () => {
  const posts = await getAllPosts();
  // console.log(JSON.stringify(posts));
  return {
    props: {
      data: JSON.stringify(posts),
    },
  };
};
