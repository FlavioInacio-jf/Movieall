import { useEffect, useState } from 'react';


import Header from '../../components/Header';
import Container from '../../components/Containert';
import Title from '../../components/Title';
import { CardsContainer } from '../../components/Card/styles';

import api from '../../services/api';
import Card from '../../components/Card';

import Loader from '../../components/Loader';
import { ContentBody, Contentheader, ContentHome, MainHome } from './styles';
import useFavorite from '../../hooks/UseFavorite';
import Info from '../../components/Info';
import { InfoContainerWrapper } from '../../components/Info/styles';

type MovieType = {
  backdrop_path: string;
  id: number;
  original_title: string;
  release_date: string;
  vote_average: number;
}

type MoviesType = {
  page: number;
  results: MovieType[];
}


const Home = () => {
  const [popularMovies, setPopularMovies] = useState<MoviesType>();
  const { favoritesNotification } = useFavorite();

  useEffect(() => {
    api.get('/popular')
      .then(response => {
        setPopularMovies(response.data);
      })
      .catch(error => {
        throw new Error(error)
      })
  }, []);

  function searchById(id: string) {
    return popularMovies?.results.find(movie => movie.id == Number(id));
  }


  return (
    <Container>
      <Header />
      <MainHome>
        <ContentHome>
          <Contentheader>
            <Title>Popular movies</Title>
          </Contentheader>
          <CardsContainer>
            {
              popularMovies
                ?
                popularMovies.results.map(movie => {
                  return (
                    <Card key={movie.id} movie={movie} />
                  );
                })
                :
                <Loader />
            }
          </CardsContainer>
        </ContentHome>

        <ContentHome>
          <Contentheader>
            <Title>Popular movies</Title>
          </Contentheader>
          <ContentBody>
            {
              popularMovies && <Card movie={popularMovies.results[5]} width='50%' />
            }

          </ContentBody>
        </ContentHome>
      </MainHome>
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