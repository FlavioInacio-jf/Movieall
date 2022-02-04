import styled from "styled-components";

export const FavoritesMain = styled.main `
  width: 100%;
  overflow: auto;

  @media (max-width: 1080px) {
    grid-row: 2;
  }
`

export const FavoritesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;

  padding: 0 2rem;
  height: 100%;
`
export const FavoritesHeader = styled.header`

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`

export const FavoritesCardsContainer = styled.div `

  display: grid;
  //grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const FavoritesEmpty = styled.div `

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const FavoritesEmptyImage = styled.img `
  align-self: center;
  max-width: 40rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`