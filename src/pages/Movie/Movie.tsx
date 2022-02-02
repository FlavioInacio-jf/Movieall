import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/Containert';
import Header from '../../components/Header';
import Loader from '../../components/Loader';

import { MovieContent } from './styles';
import MovieDetails from '../../components/MovieDetails';


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
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  vote_average: number;
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
        document.title = response[0].data.original_title;
      })
      .catch(error => {
        throw new Error(error)
      })

  }, []);

  return (
    <Container>
      <Header />
      <MovieContent>
        {
          movieDetails
            ?
            <MovieDetails movieDetails={movieDetails} movieReviews={movieReviews?.results} />
            :
            <Loader />
        }
      </MovieContent>
    </Container>
  )
}

export default Movie;

