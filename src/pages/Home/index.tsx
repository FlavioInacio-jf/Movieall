import { AiFillFire } from 'react-icons/ai';

import Header from '../../components/Header';
import Container from '../../components/Containert';
import Title from '../../components/Title';
import { CardsContainerColumns, CardsContainerRows, CardsContainerRowsColumns } from '../../components/Card/styles';


import Card from '../../components/Card';

import Loader from '../../components/Loader';
import { ContentHeader, HomeContent, HomeMain } from './styles';
import UseData from '../../hooks/UseData';
const Home = () => {

  const { popularMovies, topRatedMovies, tvShows } = UseData();
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
                    <Card key={movie.id} minWidth='20rem' movie={movie} />
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
              tvShows.map(show => <Card key={show.id} movie={show} />)
            }
          </CardsContainerRowsColumns>
          </div>
        </HomeContent>
      </HomeMain>
    </Container>
  )
}

export default Home;