import styles from "./Search.module.css";
import PostDetail from "../../components/PostDetail/PostDetail";

import useQuery from "../../hooks/useQuery";
import useFetchDocuments from "../../hooks/useFetchDocuments";
import { Link } from "react-router-dom";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");
  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h1>Resultados encontrados para: {search}</h1>
      <div className="post-list">
        {posts && posts.length === 0 && (
          <>
            <p>Não foram encontrados posts a apartir da sua busca...</p>
            <Link to="/" className="tbn btn-dark">
              Voltar
            </Link>
          </>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
