import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Containert';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Title from '../../components/Title';

import { MovieContent, MovieContentBanner, MovieContentBody, MovieImage, MovieContentHeader, List, Description, Badge, BadgeList } from './styles';

type MovieGenreType = {
  id: number;
  name: string;
}
type MovieBelongsCollectionType = {
  poster_path: string;
  backdrop_path: string;
}

type movieDetailsType = {
  adult: false;
  backdrop_path: string;
  belongs_to_collection: MovieBelongsCollectionType;
  genres: MovieGenreType[];
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[]
}
type MovieReviewType = {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
  }
  content: string;
  id: number;
  created_at: string;
}
type MoviesReviewsType = {
  results: MovieReviewType[];
}
const Movie = () => {

  const { id } = useParams();
  const endpoints = [`${id}`, `${id}/reviews`];

  const [movieDetails, setMovieDetails] = useState<movieDetailsType>();
  const [movieReviews, setMovieReviews] = useState<MoviesReviewsType>();

  useEffect(() => {

    axios.all(endpoints.map(endpoint => axios.get(endpoint)))
      .then(response => {
        setMovieDetails(response[0].data);
        setMovieReviews(response[1].data);
      })
      .catch(error => {
        throw new Error(error)
      })

  }, []);

  return (
    <Container>
      <Header />
      {movieDetails
        ?
        <MovieContent>
          <MovieContentBanner >
            <MovieImage src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.original_title} loading='lazy' />
          </MovieContentBanner>
          <MovieContentBody>
            <MovieContentHeader>
              <Title >{movieDetails.original_title}</Title>
              <Title
                color='--neutrals-400'
                fontSize='1.6rem'
                lineHeight='2.4rem'
                fontWeight='400'
                margin='0.5rem 0 0 0'
                fontFamily='Inter'
              >
                {movieDetails.tagline}
              </Title>
            </MovieContentHeader>

            <BadgeList>
              {movieDetails.genres.map(genre => <Badge key={genre.id}>{genre.name}</Badge>)}
            </BadgeList>

            <span>{movieDetails.runtime}</span>
            <span>{movieDetails.release_date}</span>
            <Description>{movieDetails.overview}</Description>

            <List>
              {movieDetails.production_companies.map(item => {
                return (
                  <li key={item.id}>
                    <Title>{item.name}</Title>
                    <Title>{item.origin_country}</Title>
                    <img src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} key={item.id} />
                  </li>
                )
              })}
            </List>
          </MovieContentBody>

        </MovieContent>
        :
        <Loader />
      }
    </Container>
  )
}

export default Movie;

