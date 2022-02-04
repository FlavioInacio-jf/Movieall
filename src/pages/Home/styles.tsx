import styled from 'styled-components';

export const HomeMain = styled.main`
  display: grid;
  grid-template-areas:
    "popularMovies topRated"
    "popularMovies tvShows";

  @media (max-width: 1080px) {
    overflow: auto;
    grid-template-columns: 1fr;
    grid-template-areas:
    "topRated topRated"
    "tvShows tvShows"
    "popularMovies popularMovies";
  }

`
export const HomeContent = styled.div<{gridArea: string}>`
  grid-area: ${({gridArea}) => gridArea};
  padding: 0 2rem;
`

export const ContentHeader = styled.header`
  padding: 2rem 0;
`
