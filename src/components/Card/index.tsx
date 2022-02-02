import { useState } from 'react';
import { BsFillStarFill, BsLink45Deg, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

import { CardContainer, CardHeader, CardFooter, CardFooterWrapper, CardTitle, CardSubtitle, CardOption, FormGroupInput, InputChekbox, Label } from './styles';

import Link from '../Link';
import useFavorite from '../../hooks/UseFavorite';

type MovieType = {
  backdrop_path: string;
  id: number;
  original_title: string;
  release_date: string;
  vote_average: number;
}


type CardProps = {
  width?: string;
  movie: MovieType;
}


const Card = ({ movie, width }: CardProps) => {
  const [ isShowOption, setShowOption ] = useState(false);
  const { handleChange, handleCheked } = useFavorite();

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
        </CardFooter>

        {
          isShowOption &&
          <CardOption>
            <FormGroupInput>
              <InputChekbox
                type="checkbox"
                value={movie.id}
                id="favorite"
                checked={handleCheked(movie.id.toString())}
                onChange={handleChange}
              />
              <Label
                htmlFor='favorite'
                id='favorite'
              >
                 {handleCheked(movie.id.toString()) ? <BsSuitHeartFill /> : <BsSuitHeart /> }

              </Label>
            </FormGroupInput>
            <Link
              to={`/movie/${movie.id}`}
              fontSize='2.4rem'
              hover='--secondary-color'
              color='--neutrals-000'
            >
              <BsLink45Deg />
            </Link>
          </CardOption>
        }
      </CardContainer>

      {/* {handleCheked(movie.id.toString()) && <Info movieName={movie.original_title} textInfo='add in favorite' />} */}
    </>
  )
}

export default Card;