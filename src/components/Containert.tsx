import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 1080px) {
    align-content: start;
    grid-template-columns: 1fr;
    grid-template-rows: 10rem 1fr;

    width: 100%;
  }

`
export default Container;