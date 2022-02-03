import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { BsFilter } from 'react-icons/bs';

import Container from "../../components/Containert"
import Header from "../../components/Header";
import Title from "../../components/Title";
import useData from "../../hooks/UseData";
import { FavoritesCardsContainer, FavoritesContent, FavoritesHeader, FavoritesMain } from "./styles";
import Card from '../../components/Card';


import { SelectWrapper, Select, Option } from "../../components/BarFilters/styles";

type MovieType = {
  backdrop_path: string;
  id: number;
  original_title: string;
  original_name?: string;
  release_date?: string;
  vote_average: number;
  popularity: number;
}


const FavoritesMovies = () => {

  useEffect(() => {
    document.title = "My Favorites | Movieall"
  }, [])

  const { favorites } = useData();
  const [ favoritesFiltered, setFavoritesFiltered ] = useState<MovieType []>([]);
  const [ popularity, setPopularity ] = useState("");

  const orderCres = useCallback((a: MovieType, b: MovieType) => {
    return a.popularity - b.popularity;
  }, [])

  const orderDesc = useCallback((a: MovieType, b: MovieType) => {
    return b.popularity - a.popularity;
  }, [])

  function handleChangeSelect({target}: ChangeEvent<HTMLSelectElement>) {
    setPopularity(target.value);

    if (target.value === "1") {
      setFavoritesFiltered(favoritesFiltered.sort(orderCres));
    }
    else {
      setFavoritesFiltered(favoritesFiltered.sort(orderDesc));
    }

  }
  useEffect(() => {
    setFavoritesFiltered(favorites);
  }, [favorites])

  return (
    <Container>
      <Header />
      <FavoritesMain>
        <FavoritesContent>
          <FavoritesHeader>
            <Title color="--primary-color">My Favorites</Title>
              <SelectWrapper>
                <BsFilter />
                <Select value={popularity} name="popularity" onChange={handleChangeSelect}>
                  <Option value={""} disabled>Select</Option>
                  <Option value={"1"}>Less popularity</Option>
                  <Option value={"2"}>More popularity</Option>
                </Select>
              </SelectWrapper>
          </FavoritesHeader>

          <FavoritesCardsContainer>
            {favoritesFiltered.map(movie => <Card ShowPopularity key={movie.id} minWidth="30rem" movie={movie} />)}
          </FavoritesCardsContainer>
        </FavoritesContent>
      </FavoritesMain>
    </Container>
  )
}

export default FavoritesMovies;