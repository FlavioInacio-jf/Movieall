import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;

  width: 100vw;
  height: 100vh;


  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    width: 100%;
    //height: auto;
  }

`
export default Container;