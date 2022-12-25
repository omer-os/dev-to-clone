import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import {
  AddDocumentToCollection,
  DeleteAllDocuments,
} from "../backend/Functions";
import { PostsCollection } from "../backend/collections";
import { Authentication } from "../backend/db";

export default function Create({ posts }) {
  const [Title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [Content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageData, setImageData] = useState(null);

  return (
    <div className="w-full h-full px-2 flex flex-col items-center">
      <div className="max-w-[50em] w-full  bg-zinc-900 border border-zinc-800 rounded mt-4">
        <CoverImage
          imageFile={imageFile}
          setImageFile={setImageFile}
          imageData={imageData}
          setImageData={setImageData}
        />

        <div className="top-input-area flex flex-col py-4 px-5">
          <button
            onClick={() => {
              DeleteAllDocuments(PostsCollection);
            }}
            className="w-max py-2 px-3 rounded border border-zinc-700 text-xs font-bold hover:bg-zinc-800 active:scale-95 active:bg-zinc-700 "
          >
            Delete all posts
          </button>
          <input
            required
            type="text"
            className="w-full mt-2 font-extrabold bg-zinc-900 p-2 text-3xl bg-zinc"
            placeholder="New post title here..."
            value={Title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            required
            type="text"
            className="w-full mt-1 bg-zinc-900 p-2 text-md"
            placeholder="add tags like: #code #webdev"
            value={tags}
            onChange={(event) => setTags(event.target.value)}
          />
        </div>

        <div className="nav bg-black h-10 w-full"></div>

        <textarea
          name="mdtext"
          id="mdtext"
          cols="30"
          rows="10"
          className="bg-zinc-900 py-4 px-6 text-zinc-400 w-full resize-none h-[40vh]"
          placeholder="Write your post content here..."
          value={Content}
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
      </div>
      <div className="flex py-4 justify-between max-w-[50em] w-full">
        <div className="flex gap-3">
          <button
            onClick={() => {
              AddDocumentToCollection(PostsCollection, {
                postTitle: Title,
                postTags: tags.split(" "),
                postContent: Content,
                // postImageData: imageData ? imageData : false,
                userId: Authentication.currentUser.uid,
                postReactions: 0,
                postReadTime: 2,
              });
            }}
            className="bg-indigo-600 p-2 rounded font-bold active:scale-95 active:bg-indigo-700 text-sm transition-all"
          >
            Publish
          </button>
          <button className="bg-black p-2 rounded  active:scale-95 hover:bg-indigo-600/30 hover:text-indigo-400 transition-all hover:underline text-sm">
            Save draft
          </button>
        </div>
      </div>
    </div>
  );
}

const CoverImage = ({ imageFile, setImageFile, imageData, setImageData }) => {
  const handleFileSelection = (event) => {
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);

    // Use the FileReader API to read the selected file and update the imageData state
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageData(event.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const removeImage = () => {
    setImageFile(null);
    setImageData(null);
  };

  return (
    <div className="h-[10em] w-full">
      {imageData && (
        <div className="w-full h-full relative">
          <img
            className="object-cover rounded-t w-full h-full"
            src={imageData}
            alt=""
          />
          <button
            className="cross-button active:scale-95 transition-all absolute top-2 left-2 p-1 cursor-pointer bg-zinc-900 rounded-lg"
            onClick={removeImage}
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      )}

      {!imageData && (
        <div className="flex items-center justify-center w-full h-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-full border-2  border-zinc-800 cursor-pointer bg-zinc-800"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold">
                  Click to upload a cover image
                </span>{" "}
                or drag and drop
              </p>
            </div>
            <input
              required
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileSelection}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await getDocs(PostsCollection);
  var posts = [];
  data.docs.map((doc) => {
    posts.push(doc.data());
  });

  return {
    props: { posts },
  };
};
