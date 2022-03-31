import { useState } from "react";
import { useRouter } from "next/router";



export default function PostCard({ post }) {
  const [publishing, setPublishing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  const publishPost = async (postId) => {
    setPublishing(true);

    try {
      await fetch("/api/posts", {
        method: "PUT",
        body: postId,
      });

      setPublishing(false);

      return router.push(router.asPath);
    } catch (error) {
      return setPublishing(false);
    }
  };

  const deletePost = async (postId) => {
    //change deleting state
    setDeleting(true);

    try {
      await fetch("/api/posts", {
        method: "DELETE",
        body: postId,
      });

      setDeleting(false);

      return router.push(router.asPath);
    } catch (error) {
      return setDeleting(false);
    }
  };
  return (
    <>
      <li>
        <h3>{post.firstname}</h3>
        <p1>{post.lastname}</p1>
        <p2>{post.email}</p2>
        <p3>{post.phone}</p3>
        <p4>{post.address}</p4>
        <small>{new Date(post.createdAt).toLocaleDateString()}</small>
        <br />
        {!post.published ? (
          <button type="button" onClick={() => publishPost(post._id)}>
            {publishing ? "Publishing" : "Publish"}
          </button>
        ) : null}
        <button type="button" onClick={() => deletePost(post["_id"])}>
          {deleting ? "Deleting" : "Delete"}
        </button>
      </li>
    </>
  );
}



