import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Containert';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader';
import Title from '../../components/Title';
import api from '../../services/api';

type MovieGenreType = {
  id: number;
  name: string;
}
type MovieBelongsCollectionType = {
  poster_path: string;
  backdrop_path: string;
}

type MovieType = {
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
}

const Movie = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType>();

  useEffect(() => {

    api.get(`${id}`)
      .then((response) => {
        console.log(response.data)
        setMovie(response.data);
        document.title = `${response.data.original_title || "Movie Not found"} | MovieAll`;
      })
      .catch(error => {
        throw new Error(error)
      })
  }, []);
  return (
    <Container>
      <Header />

      <div>
        <Title>{movie?.original_title}</Title>
        {movie
          ?
          <div><img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" /></div>
          :
          <Loader />
        }
      </div>

    </Container>
  )
}

export default Movie;

