
import { BsFillHouseDoorFill, BsFillStarFill } from 'react-icons/bs';
import { Brand, HeaderWrapper, Link, List } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <Brand href="/">M</Brand>
      <List>
        <li><Link className="active" href="/movies" title=""><BsFillHouseDoorFill /></Link></li>
        <li><Link href="/"><BsFillStarFill /></Link></li>
      </List>
    </HeaderWrapper>
  );
}

export default Header;