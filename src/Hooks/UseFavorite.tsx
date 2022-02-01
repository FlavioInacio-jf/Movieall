import { useContext } from "react"
import { FavoriteContext } from "../Contexts/FavoriteContext"

const useFavorite = ( ) => {
  const value = useContext(FavoriteContext);

  return value;
}

export default useFavorite;