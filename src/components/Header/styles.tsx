import styled from "styled-components"
import Link from "../Link";

export const HeaderWrapper = styled.header`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 2rem 0;
  gap: 2rem;

  @media (max-width: 1080px) {
    flex-direction: row;
    padding: 2rem;
    width: 100%;

    align-self: start;

  }

`
export const Brand = styled(Link)`
  font: 400 2.4rem 'Inter', sans-serif;
  line-height: 3.6rem;

  text-align: center;
  text-transform: uppercase;
  background: var(--neutrals-999);
  color: var(--neutrals-000);

  clip-path: circle();
  padding: 1rem;

  cursor: pointer;

  &:hover {
    color: var(--neutrals-000);
  }
`
export const List = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;


  @media (max-width: 1080px) {
    flex-direction: row;
    justify-content: flex-end;

    width: 100%;
  }

`
