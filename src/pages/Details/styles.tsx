import styled from "styled-components";

export const MovieMain = styled.main `
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 50rem;
  grid-template-areas: "content banner";
  justify-items: start;
  align-items: start;
  overflow: hidden;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "banner" "content";
    overflow-y: auto;
  }

`