import { useContext } from "react"
import { FavoriteContext } from "../contexts/FavoriteContext"

const useFavorite = ( ) => {
  const value = useContext(FavoriteContext);

  return value;
}

export default useFavorite;