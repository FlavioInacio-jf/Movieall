import { useState } from 'react';
import { BsFillStarFill, BsLink45Deg, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

import { CardContainer, CardHeader, CardFooter, CardFooterWrapper, CardTitle, CardSubtitle, CardOption, FormGroupInput, InputChekbox, Label } from './styles';

import Link from '../Link';
import useFavorite from '../../hooks/UseFavorite';

type MovieType = {
  backdrop_path: string;
  id: number;
  original_name?: string;
  original_title: string;
  release_date?: string;
  vote_average: number;
}


type CardProps = {
  width?: string;
  marginRight?: string;
  movie: MovieType;
}


const Card = ({ movie, width, marginRight }: CardProps) => {
  const [ isShowOption, setShowOption ] = useState(false);
  const { handleChange, handleCheked } = useFavorite();

  function handleOnMouse(state: boolean) {
    setShowOption(state);
  }
  const { backdrop_path, vote_average, original_title, original_name, release_date, id } = movie;
  return (
    <>
      <CardContainer
        background={backdrop_path}
        width={width}
        marginRight={marginRight}
        onMouseEnter={() => handleOnMouse(true)}
        onMouseLeave={() => handleOnMouse(false)}
      >
        <CardHeader>
          <BsFillStarFill />{vote_average}/10
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
                checked={handleCheked(id.toString())}
                onChange={handleChange}
              />
              <Label
                htmlFor='favorite'
                id='favorite'
              >
                 {handleCheked(id.toString()) ? <BsSuitHeartFill /> : <BsSuitHeart /> }

              </Label>
            </FormGroupInput>
            <Link
              to={`/movie/${id}`}
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