import styled from 'styled-components';
import { useEffect, useState } from 'react';


import Header from '../../components/Header/Header';
import Container from '../../components/Containert';
import Title from '../../components/Title';
import { CardsContainer } from '../../components/Card/styles';

import api from '../../services/api';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import Loader from '../../components/Loader';

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type MoviesType = {
  page: number;
  results: MovieType[];
}



const MainHome = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  overflow: hidden;

`
const ContentHome = styled.div`
  padding: 0 2rem;
`

const Contentheader = styled.header`
  padding: 2rem 0;
`
const ContentBody = styled.div`

`

const Home = () => {
  const [popularMovies, setPopularMovies] = useState<MoviesType>();

  useEffect(() => {
    api.get('/popular')
      .then(response => {
        setPopularMovies(response.data);
      })
      .catch(error => {
        throw new Error (error)
      })
  }, []);

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
            <label className='sr-only' htmlFor='search'>Search</label>
            <input type="search" id='search' name='search' placeholder='Inform your search' />
          </Contentheader>
          <ContentBody>
            {
              popularMovies && <Card movie={popularMovies.results[5]} width='50%'/>
            }

          </ContentBody>
        </ContentHome>
      </MainHome>

    </Container>
  )
}

export default Home;