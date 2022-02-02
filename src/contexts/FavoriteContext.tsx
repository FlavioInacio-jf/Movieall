import axios from "axios";
import { ChangeEvent, createContext, ReactNode, useEffect, useState} from "react";

type FavoriteContextType = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCheked: (id: string) => boolean;
  favoritesNotification: string [];
  setFavoritesNotification: (array: string []) => void;
  favoritesMovies: FavoritesMoviesType [];
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
}

type FavoritesMoviesType = {
  id: string;
}

const endpoints = ["top_rated", "popular"];


export const FavoriteContext = createContext({ } as FavoriteContextType);

export const FavoriteContextProvider = ({children}: FavoriteContextProps) => {

  const [ favoritesMovies, setFavoritesMovies ] = useState<FavoritesMoviesType []>([]);
  const [ favoritesNotification, setFavoritesNotification ] = useState<string []>([]);

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

  function handleChange({target}: ChangeEvent<HTMLInputElement>) {
    if (target.checked) {
      setFavoritesMovies([...favoritesMovies, {["id"] : target.value}]);

    }
    else {
      setFavoritesMovies(favoritesMovies.filter(favorite => favorite.id !== target.value));
    }

    if (!favoritesNotification.includes(target.value)) {
      setFavoritesNotification([target.value, ...favoritesNotification ]);
    }
    else {
      setFavoritesNotification(favoritesNotification.filter(id => id !== target.value));
    }
  }
  console.log(favoritesMovies)

  function handleCheked(id: string) {
    return favoritesMovies.some( favorite => favorite.id === id);
  }

  return (
    <FavoriteContext.Provider value =
    {
        {
          handleChange,
          handleCheked,
          favoritesNotification,
          setFavoritesNotification,
          favoritesMovies,
          popularMovies,
          topRatedMovies,
          tvShows
        }
      }
    >
      {children}
    </FavoriteContext.Provider>
  );
}