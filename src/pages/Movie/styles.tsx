import styled from "styled-components";

export const MovieContent = styled.div `
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 50rem;
  justify-items: start;
  align-items: start;

`

export const MovieContentBanner = styled.aside `
  height: 100%;
  order: 2;
`

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
`

export const MovieContentBody =styled.div`
  order: 1;
  width: 100%;
  height: 100vh;

  padding: 2rem;
  background: var(--neutrals-000);

  overflow-y: auto;

  /* border-radius: 0 0 1rem 1rem;
  box-shadow: 0 3px 6px rgb(0 0 0 / 10%); */
`

export const MovieContentHeader = styled.header `

`
export const Description = styled.p `
  padding: 2rem 0;

  font-size: 1.6rem;
  line-height: 2.4rem;
  font-family: 'Inter', sans-serif;
  color: var(--neutrals-800);
  max-width: 50%;

  text-align: left;
`
export const List = styled.ul`
  padding: 2rem 0;
  display: flex;
  gap: 2rem;
`

export const Badge = styled.li`
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--neutrals-000);
  background: var(--primary-color);

  padding: 0.5rem 1rem;
  border-radius: 5rem;
`

export const BadgeList = styled(List) `
  li:nth-child(1) {
    background: var(--secondary-color);
  }
  li:nth-child(2) {
    background: var(--tertirary-color);
  }
  li:nth-child(3) {
    background: var(--quartenary-color);
  }
  li:nth-child(4) {
    background: var(--neutrals-600);
  }
  li:nth-child(5) {
    background: var(--neutrals-999);
  }
`