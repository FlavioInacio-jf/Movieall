import { useContext } from "react"
import { DataContext } from "../contexts/DataContext";

const useFavorite = ( ) => {
  const value = useContext(DataContext);

  return value;
}

export default useFavorite;