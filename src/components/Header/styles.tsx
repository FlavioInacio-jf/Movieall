import styled from "styled-components"

export const HeaderWrapper = styled.header`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 2rem 0;
  gap: 2rem;

`

export const Brand = styled.a`
  font: 400 2.4rem 'Inter', sans-serif;
  line-height: 3.6rem;

  text-align: center;
  text-transform: uppercase;
  background: var(--neutrals-999);
  color: var(--neutrals-000);

  clip-path: circle();
  padding: 1rem;

  cursor: pointer;
`
export const Link = styled.a `

  font-size: 2.4rem;
  text-align: center;
  line-height: 2.1rem;
  color: var(--neutrals-300);
  padding: 1rem;

  cursor: pointer;

  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--neutrals-400);
  }
  &.active {
    font-weight: 700;
    color: var(--primary-color);
  }
`
export const List = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

`
