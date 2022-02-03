import { useEffect, useRef } from 'react';
import useData from '../../hooks/UseData';
import { InfoContainer, InfoText } from './styles';


type InfoProps = {
  id: number;
  movieName: string;
}
const Info = ({ movieName, id }: InfoProps) => {
  const { setFavoritesNotification, favoritesNotification } = useData();
  const timeOutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeOutRef.current = setTimeout(() => {
      setFavoritesNotification(favoritesNotification.filter( movie => movie.id !== id));
  }, 4000);
    return () => clearTimeout(timeOutRef.current as NodeJS.Timeout);
  }, [favoritesNotification, setFavoritesNotification, id])


  return (
    (
      <InfoContainer>
        <InfoText>{movieName} </InfoText>
      </InfoContainer>
    )
  )
}

export default Info;