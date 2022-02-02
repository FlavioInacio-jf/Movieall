import styled from "styled-components";
import { Link as LinkRouter } from 'react-router-dom';

const Link = styled(LinkRouter)<{ fontSize?: string, textAlign?: string, lineHeight?: string, color?: string, hover?: string, padding?: string}>`

  font-size: ${({fontSize}) => fontSize ? fontSize : "2.4rem"};
  text-align: ${({textAlign}) => textAlign ? textAlign : "center"};
  line-height: ${({lineHeight}) => lineHeight ? lineHeight : "2.1rem"};
  color: var(${({color}) => color ? color : "--neutrals-300"});
  padding: ${({padding}) => padding ? padding : "1rem"};

  cursor: pointer;

  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(${({hover}) => hover ? hover : "--neutrals-400"});
  }
  &.active {
    font-weight: 700;
    color: var(--primary-color);
  }

  @media (max-width: 720px) {
    font-size: 3rem;
  }
`
export default Link;

