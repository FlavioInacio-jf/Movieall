import styled from "styled-components";

export const FavoritesMain = styled.main `
  width: 100%;
  justify-self: start;
  align-self: start;

  overflow: hidden;
`

export const FavoritesContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  padding: 0 2rem;
`
export const FavoritesHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`

export const FavoritesCardsContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;

  gap: 2rem;
`