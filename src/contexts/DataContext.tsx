import axios from "axios";
import { ChangeEvent, createContext, ReactNode, useEffect, useState} from "react";

type FavoriteContextType = {
  handleChange: (event: ChangeEvent<HTMLInputElement>, movie: MovieType) => void;
  handleCheked: (id: number) => boolean;
  favoritesNotification: MovieType [];
  setFavoritesNotification: (array: MovieType []) => void;
  favorites: MovieType [];
  popularMovies: MovieType [];
  topRatedMovies: MovieType [];
  tvShows: MovieType [];
}
type FavoriteContextProps = {
  children: ReactNode;
}

type MovieType = {
  backdrop_path: string;
  id: number;
  original_title: string;
  original_name?: string;
  release_date?: string;
  vote_average: number;
  popularity: number;
}

const endpoints = ["movie/top_rated", "movie/popular"];


export const DataContext = createContext({ } as FavoriteContextType);

export const DataContextProvider = ({children}: FavoriteContextProps) => {

  const [ favorites, setFavorites ] = useState<MovieType []>([]);
  const [ favoritesNotification, setFavoritesNotification ] = useState<MovieType []>([]);

  const [ popularMovies, setPopularMovies ] = useState<MovieType [] >([]);
  const [ topRatedMovies, setTopRatedMovies ] = useState<MovieType []>([]);
  const [ tvShows, setTvShows ] = useState<MovieType []>([]);

  useEffect(() => {
    axios.all(endpoints.map(endpoint => axios.get(endpoint)))
      .then(response => {
        setTopRatedMovies(response[0].data.results);
        setPopularMovies(response[1].data.results);

      })
      .catch(error => {
        throw new Error(error)
      })

    axios.get("https://api.themoviedb.org/3/tv/popular")
      .then(({data}) => setTvShows(data.results))
      .catch(error => {
        throw new Error(error)
      })
  }, []);

  function handleChange({target}: ChangeEvent<HTMLInputElement>, movie: MovieType) {

    if (target.checked) {
      setFavorites([...favorites, movie]);
    }
    else {
      setFavorites(favorites.filter(favorite => favorite.id !== movie.id));
    }

    if (!favoritesNotification.includes(movie)) {
      setFavoritesNotification([movie, ...favoritesNotification]);
    }

  }

  function handleCheked(id: number) {
    return favorites.some( favorite => favorite.id === id);
  }

  return (
    <DataContext.Provider value =
    {
        {
          handleChange,
          handleCheked,
          favoritesNotification,
          setFavoritesNotification,
          favorites,
          popularMovies,
          topRatedMovies,
          tvShows
        }
      }
    >
      {children}
    </DataContext.Provider>
  );
}