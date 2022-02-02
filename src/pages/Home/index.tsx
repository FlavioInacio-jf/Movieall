import { AiFillFire } from 'react-icons/ai';

import Header from '../../components/Header';
import Container from '../../components/Containert';
import Title from '../../components/Title';
import { CardsContainerColumns, CardsContainerRows, CardsContainerRowsColumns } from '../../components/Card/styles';


import Card from '../../components/Card';

import Loader from '../../components/Loader';
import { ContentHeader, HomeContent, HomeMain } from './styles';
import useFavorite from '../../hooks/UseFavorite';
import Info from '../../components/Info';
import { InfoContainerWrapper } from '../../components/Info/styles';

const Home = () => {

  const { favoritesNotification, popularMovies, topRatedMovies, tvShows } = useFavorite();

  function searchById(id: string) {
    return popularMovies.find(movie => movie.id == Number(id));
  }

  return (
    <Container>
      <Header />
      <HomeMain>
        <HomeContent gridArea='popularMovies'>
          <ContentHeader>
            <Title color='--tertirary-color'>Popular movies</Title>
          </ContentHeader>
          <CardsContainerRows>
            {
              popularMovies.length > 0
                ?
                popularMovies.map(movie => {
                  return (
                    <Card key={movie.id} movie={movie} />
                  );
                })
                :
                <Loader />
            }
          </CardsContainerRows>
        </HomeContent>

        <HomeContent gridArea='topRated'>
          <ContentHeader>
            <Title color='--primary-color'>Top rated <AiFillFire /></Title>
          </ContentHeader>
          <CardsContainerColumns>
            {
              topRatedMovies.length > 0
                ?
                topRatedMovies.map(movie => {
                  return (
                    <Card width='20rem' key={movie.id} movie={movie} />
                  );
                })
                :
                <Loader />
            }
          </CardsContainerColumns>
        </HomeContent>

        <HomeContent gridArea='tvShows'>
          <ContentHeader>
            <Title color='--secondary-color'>Tv shows</Title>
          </ContentHeader>
          <div>
          <CardsContainerRowsColumns>
            {
              tvShows.length > 0 &&
              tvShows.map(show => <Card width='30rem' marginBottom='0' key={show.id} movie={show} marginRight="0"/>)
            }
          </CardsContainerRowsColumns>
          </div>
        </HomeContent>
      </HomeMain>
      <InfoContainerWrapper>
        {favoritesNotification.map(favorite => {
          const movie = searchById(favorite)
          const movieTitle = movie?.original_title || " "
          return (
            <Info key={favorite} movieName={movieTitle} id={favorite} />
          )
        })
        }
      </InfoContainerWrapper>
    </Container>
  )
}

export default Home;