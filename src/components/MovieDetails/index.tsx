import Loader from '../Loader';
import MovieReview from '../MovieReview';
import Title from '../Title';
import { MovieContentBanner, MovieContentBody, MovieImage, MovieContentHeader, List, Description, Badge, BadgeList, Detail, MovieReviewsContainer } from './styles';

type MovieGenreType = {
  id: number;
  name: string;
}
type MovieBelongsCollectionType = {
  poster_path: string;
  backdrop_path: string;
}
type MovieDetailsType = {
  adult: false;
  name?: string;
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

type MovieDetailsProps = {
  movieDetails: MovieDetailsType;
  movieReviews: MovieReviewType[] | undefined;
}
const baseURLIMAGE = "https://image.tmdb.org/t/p/w500";

const MovieDetails = ({ movieDetails, movieReviews }: MovieDetailsProps) => {

  const { poster_path, original_title,
    vote_average, tagline, genres,
    overview, runtime, release_date, name } = movieDetails;
  return (
    <>
      <MovieContentBanner >
        <MovieImage src={`${baseURLIMAGE}${poster_path}`} alt={original_title} loading='lazy' />
      </MovieContentBanner>
      <MovieContentBody>
        <MovieContentHeader>
          <Title >{original_title || name} <Detail>{vote_average}</Detail></Title>
          <Title
            color='--neutrals-400'
            fontSize='1.6rem'
            lineHeight='2.4rem'
            fontWeight='400'
            margin='0.5rem 0 0 0'
            fontFamily='Inter'
          >
            {tagline}
          </Title>
        </MovieContentHeader>

        <BadgeList>
          {genres.map(genre => <Badge key={genre.id}>{genre.name}</Badge>)}
          {runtime && <Detail>{(runtime / 60).toFixed(2)}h</Detail>}
          { release_date && <Detail>{release_date}</Detail>}
        </BadgeList>
        <Description>{overview}</Description>

        <MovieReviewsContainer>
          {
            movieReviews
              ?
              movieReviews.map(review => <MovieReview key={review.id} review={review} />)
              :
              <Loader />
          }
        </MovieReviewsContainer>

      </MovieContentBody>
    </>
  )
}

export default MovieDetails;