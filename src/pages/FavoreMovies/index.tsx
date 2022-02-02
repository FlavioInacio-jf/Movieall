import Container from "../../components/Containert"
import Header from "../../components/Header";
import Title from "../../components/Title";
import useFavorite from "../../hooks/UseFavorite";
import { FavoritesContent, FavoritesHeader, FavoritesMain } from "./styles";

const FavoritesMovies = () => {
  const { favoritesMovies  } = useFavorite();

  return (
    <Container>
      <Header />
      <FavoritesMain>
        <FavoritesContent>
          <FavoritesHeader>
            <Title>My Favorites movies</Title>
          </FavoritesHeader>
          {favoritesMovies.map(favorite => <li key={favorite.id}>{favorite.id}</li>)}
        </FavoritesContent>

        <FavoritesContent>
          <FavoritesHeader>
            <Title>My Favorites series</Title>
          </FavoritesHeader>
          {}
        </FavoritesContent>

      </FavoritesMain>
    </Container>
  )
}

export default FavoritesMovies;