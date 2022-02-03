import { useState } from 'react';
import { BsFillStarFill, BsLink45Deg, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

import { CardContainer, CardHeader, CardFooter, CardFooterWrapper, CardTitle, CardSubtitle, CardOption, FormGroupInput, InputChekbox, Label, CardWrapVote } from './styles';

import Link from '../Link';
import useFavorite from '../../hooks/UseData';

type MovieType = {
  backdrop_path: string;
  id: number;
  original_name?: string;
  original_title: string;
  release_date?: string;
  vote_average: number;
  popularity: number;
}


type CardProps = {
  minWidth?: string;
  movie: MovieType;
  ShowPopularity?: boolean;
}


const Card = ({ movie, minWidth, ShowPopularity }: CardProps) => {
  const [ isShowOption, setShowOption ] = useState(false);
  const { handleChange, handleCheked } = useFavorite();

  function handleOnMouse(state: boolean) {
    setShowOption(state);
  }
  const { backdrop_path, vote_average, original_title, original_name, release_date, id, popularity } = movie;
  const resource = original_title ? "movie" : "tv"
  return (
    <>
      <CardContainer
        background={backdrop_path}
        minWidth={minWidth}
        onMouseEnter={() => handleOnMouse(true)}
        onMouseLeave={() => handleOnMouse(false)}
        onClick={() => handleOnMouse(true)}
        onTouchMove={() => handleOnMouse(false)}
      >
        <CardHeader popularity = {ShowPopularity}>
          {ShowPopularity && popularity}
          <CardWrapVote><BsFillStarFill />{vote_average}/10</CardWrapVote>
        </CardHeader>
        <CardFooter>
          <CardFooterWrapper>
            <CardTitle>{original_title || original_name}</CardTitle>
            <CardSubtitle>{release_date && release_date.slice(0, 4)}</CardSubtitle>
          </CardFooterWrapper>
        </CardFooter>

        {
          isShowOption &&
          <CardOption>
            <FormGroupInput>
              <InputChekbox
                type="checkbox"
                value={id}
                id="favorite"
                checked={handleCheked(id)}
                onChange={(event) => handleChange(event, movie)}
              />
              <Label
                htmlFor='favorite'
                id='favorite'
              >
                 {handleCheked(id) ? <BsSuitHeartFill /> : <BsSuitHeart /> }

              </Label>
            </FormGroupInput>
            <Link
              to={`details/${resource}/${id}`}
              fontSize='2.4rem'
              hover='--secondary-color'
              color='--neutrals-000'
            >
              <BsLink45Deg />
            </Link>
          </CardOption>
        }
      </CardContainer>
    </>
  )
}

export default Card;