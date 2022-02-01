import { ChangeEvent, createContext, ReactNode, useEffect, useRef, useState} from "react";


type FavoriteContextType = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCheked: (id: string) => boolean;
  favoritesNotification: string [];
  setFavoritesNotification: (array: string []) => void;
}
type FavoriteContextProps = {
  children: ReactNode;
}

type FavoritesMoviesType = {
  id: string;
}

export const FavoriteContext = createContext({ } as FavoriteContextType);

export const FavoriteContextProvider = ({children}: FavoriteContextProps) => {

  const [ favoritesMovies, setFavoritesMovies ] = useState<FavoritesMoviesType []>([]);
  const [ favoritesNotification, setFavoritesNotification ] = useState<string []>([]);

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
          setFavoritesNotification
        }
      }
    >
      {children}
    </FavoriteContext.Provider>
  );
}