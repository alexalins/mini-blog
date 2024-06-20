import { useParams } from "react-router-dom";
import styles from "./Post.module.css";

const Post = () => {
  const { id } = useParams();
  return <div>Post {id}</div>;
};

export default Post;
