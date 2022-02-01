import { useEffect, useRef } from 'react';
import useFavorite from '../../Hooks/UseFavorite';
import { InfoContainer, InfoText } from './styles';


type InfoProps = {
  id: string;
  movieName: string;
}
const Info = ({ movieName, id }: InfoProps) => {
  const { setFavoritesNotification, favoritesNotification } = useFavorite();
  const timeOutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeOutRef.current = setTimeout(() => {
      setFavoritesNotification(favoritesNotification.filter( number => number !== id));
  }, 4000);
    return () => clearInterval(timeOutRef.current as NodeJS.Timeout);
  }, [])

  return (
    (
      <InfoContainer>
        <InfoText>{movieName} </InfoText>
      </InfoContainer>
    )
  )
}

export default Info;