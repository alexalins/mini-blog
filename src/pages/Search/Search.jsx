import useQuery from "../../hooks/useQuery";
import styles from "./Search.module.css";

const Search = () => {
  const query = useQuery();
  const search = query.get('q');
  console.log(search)
  return (
    <div>
        <h2>Search</h2>
        <p>{search}</p>
    </div>
  )
}

export default Search