import { useContext } from "react"
import { DataContext } from "../contexts/DataContext";

const useData = ( ) => {
  const value = useContext(DataContext);

  return value;
}

export default useData;