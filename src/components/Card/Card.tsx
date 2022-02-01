import { useState } from 'react';
import { CardContainer, CardHeader, CardFooter, CardFooterWrapper, CardTitle, CardSubtitle, CardOption, CardButton } from './styles';

import { BsFillGridFill, BsFillStarFill, BsLink45Deg, BsSuitHeart } from 'react-icons/bs';

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


type CardProps = {
  width?: string;
  movie: MovieType;
}


const Card = ({ movie, width }: CardProps) => {
  const [isShowOption, setShowOption] = useState(false);

  function handleOnMouse(state: boolean) {
    setShowOption(state);
  }
  return (
    <>
      <CardContainer
        background={movie.backdrop_path}
        width={width}
        onMouseEnter={() => handleOnMouse(true)}
        onMouseLeave={() => handleOnMouse(false)}
      >
        <CardHeader>
          <BsFillStarFill />{movie.vote_average}/10
        </CardHeader>
        <CardFooter>
          <CardFooterWrapper>
            <CardTitle>{movie.original_title}</CardTitle>
            <CardSubtitle>{movie.release_date.slice(0, 4)}</CardSubtitle>
          </CardFooterWrapper>
          <CardButton type='button'><BsFillGridFill /></CardButton>
        </CardFooter>

        {
          isShowOption &&
          <CardOption>
            <CardButton fontSize='2.4rem' color=''><BsSuitHeart /></CardButton>
            <CardButton fontSize='2.4rem'><BsLink45Deg /></CardButton>
          </CardOption>
        }
      </CardContainer>
    </>
  )
}

export default Card;