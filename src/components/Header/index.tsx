import { BsFillHouseDoorFill, BsHeartFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

import { Brand, HeaderWrapper, List } from './styles';
import Link from '../Link';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <HeaderWrapper>
      <Brand to="/">M</Brand>
      <List>
        <li>
          <Link to="/" title="Home" className={pathname === "/" ? "active" : ""}><BsFillHouseDoorFill /></Link>
        </li>
        <li>
          <Link to="/FavoritesMovies"  title='My favorites'className={pathname === "/FavoritesMovies" ? "active" : ""}><BsHeartFill /></Link>
        </li>
      </List>
    </HeaderWrapper>
  );
}

export default Header;