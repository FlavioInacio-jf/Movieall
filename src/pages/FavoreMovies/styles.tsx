import styled from "styled-components";

export const FavoritesMain = styled.main `
  justify-self: start;
  align-self: start;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  grid-template-areas: "movies tvShows";

  overflow: hidden;

  justify-content: start;
  align-items: start;

  @media (max-width: 1080px) {
    overflow: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "movies" "tvShows";
  }

`

export const FavoritesContent = styled.header`
  padding: 0 2rem;
`
export const FavoritesHeader = styled.header`
  padding: 2rem 0;
`