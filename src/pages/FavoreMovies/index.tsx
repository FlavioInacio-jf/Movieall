import { useEffect, useState } from "react";
import { BsSuitHeartFill } from 'react-icons/bs';
import Container from "../../components/Containert"
import Header from "../../components/Header";
import Title from "../../components/Title";
import useFavorite from "../../hooks/UseData";
import { FavoritesContent, FavoritesHeader, FavoritesMain } from "./styles";
import Card from '../../components/Card';
import { CardsContainerRows } from "../../components/Card/styles";

type MovieType = {
  backdrop_path: string;
  id: number;
  original_name?: string;
  original_title: string;
  release_date?: string;
  vote_average: number;
}

type FavoritesMoviesType = {
  id: string;
}

const FavoritesMovies = () => {
  const { favoritesMovies, popularMovies, tvShows, topRatedMovies  } = useFavorite();
  const [ listPopularMovies, setListPopularMovies ] = useState<MovieType []>([]);

  useEffect(() => {
    document.title = "My Favorites | Movieall"
  }, [])

  function search(id: FavoritesMoviesType, movies:MovieType []) {
    const movie = movies.find((movie) => movie.id == Number(id.id))
    return movie
  }
  function isExist(id: string, listPopularMovies: MovieType []) {
    return listPopularMovies.some( movie => movie.id === Number(id));
  }

  useEffect(() => {
    favoritesMovies.map((favorite) => {

      if (!isExist(favorite.id, listPopularMovies)) {
        const movie = search(favorite, popularMovies);
        if (movie) {
          setListPopularMovies([...listPopularMovies, movie])
        }
      }
    })

  }, [favoritesMovies, listPopularMovies])
  return (
    <Container>
      <Header />
      <FavoritesMain>
        <FavoritesContent>
          <FavoritesHeader>
            <Title color="--primary-color">My Favorites popular movies <BsSuitHeartFill /></Title>
          </FavoritesHeader>

          <CardsContainerRows>
            {
              listPopularMovies.length > 0 &&

              listPopularMovies.map(movie =>  <Card key={movie.id} movie={movie} />)
            }
          </CardsContainerRows>

        </FavoritesContent>

        <FavoritesContent>
          <FavoritesHeader>
            <Title>My Favorites series</Title>
          </FavoritesHeader>
        </FavoritesContent>
      </FavoritesMain>
    </Container>
  )
}

export default FavoritesMovies;