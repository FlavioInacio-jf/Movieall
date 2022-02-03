import styled from 'styled-components';

export const HomeMain = styled.main`
  display: grid;
  grid-template-columns: calc(10rem - 100vw * 0.10rem) calc(10rem - 100vw * 0.90rem);
  grid-template-rows: 1fr 1fr;
  overflow: hidden;

  grid-template-areas:
    "popularMovies topRated"
    "popularMovies tvShows";

  @media (max-width: 1080px) {
    overflow: auto;

    grid-template-columns: 1fr;
    grid-template-areas:
    "popularMovies popularMovies"
    "topRated topRated"
    "tvShows tvShows";

  }

`
export const HomeContent = styled.div<{gridArea: string}>`
  grid-area: ${({gridArea}) => gridArea};
  padding: 0 2rem;
`

export const ContentHeader = styled.header`
  padding: 2rem 0;
`
