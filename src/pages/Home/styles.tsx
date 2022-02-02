import styled from 'styled-components';

export const HomeMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;

  grid-template-areas:
    "popularMovies topRated"
    "popularMovies tvShows";

`
export const HomeContent = styled.div<{gridArea: string}>`
  grid-area: ${({gridArea}) => gridArea};
  padding: 0 2rem;
`

export const ContentHeader = styled.header`
  padding: 2rem 0;
`
export const ContentBody = styled.div`

`