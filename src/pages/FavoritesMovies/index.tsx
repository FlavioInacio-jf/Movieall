import { useEffect, useState } from "react";
import { BsFilter } from 'react-icons/bs';

import Container from "../../components/Containert"
import Header from "../../components/Header";
import Title from "../../components/Title";
import useData from "../../hooks/UseData";
import { FavoritesCardsContainer, FavoritesContent, FavoritesHeader, FavoritesMain } from "./styles";
import Card from '../../components/Card';
import Button from "../../components/Button";
import BarFilters from "../../components/BarFilters";


const FavoritesMovies = () => {
  const [ isShowFilters, setShowFilters ] = useState(false);
  const { favorites  } = useData();

  useEffect(() => {
    document.title = "My Favorites | Movieall"
  }, [])

  function handleClick() {
    setShowFilters(!isShowFilters);
  }

  return (
    <Container>
      <Header />
      <FavoritesMain>
        <FavoritesContent>
          <FavoritesHeader>
            <Title color="--primary-color">My Favorites</Title>
            <Button type="button" onClick={handleClick}>
              <BsFilter />
              Filters
            </Button>
          </FavoritesHeader>
          { isShowFilters && <BarFilters />}
          <FavoritesCardsContainer>
            {
               favorites.length > 0 &&

               favorites.map(movie => <Card key={movie.id} minWidth="30rem" movie={movie} />)
            }
          </FavoritesCardsContainer>
        </FavoritesContent>
      </FavoritesMain>
    </Container>
  )
}

export default FavoritesMovies;