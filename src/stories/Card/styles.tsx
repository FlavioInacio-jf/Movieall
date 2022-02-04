import styled from "styled-components";

export const CardContainer = styled.div<{background : string, minWidth: string, maxWidth: string}>`
  width: auto;
  height: auto;

  border-radius: 1rem;
  background: -webkit-gradient(linear,left top, right top, from(rgba(0,0,0,.3))),
              url("https://image.tmdb.org/t/p/w500${({background}) => background}") no-repeat left top;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  min-width: ${({minWidth}) => minWidth};
  min-height: 20rem;
  max-width: ${({maxWidth}) => maxWidth};
`

export const CardHeader = styled.header<{popularity?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: ${({popularity}) => popularity ? "space-between": 'flex-end'};
  gap: 1rem;

  padding: 2rem;

  font: 400 1.4rem 'Inter', sans-serif;
  color: var(--neutrals-000);

`

export const CardWrapVote = styled.span`
  display: flex;
  gap: 1rem;
`

export const CardFooter = styled.footer`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;
  border-radius: 0 0 1rem 1rem;

`

export const CardButton = styled.button<{fontSize?: string, color?: string}>`
  cursor: pointer;

  display: flex;
  align-items: center;
  font-size: ${({fontSize}) => fontSize ? fontSize : "2rem"};
  color: var(${({color}) => color ? color : "--neutrals-000"});

  transition: color 0.3s ease-in-out;
  padding: 1rem;

  pointer-events: all;
  &:hover {
    color: var(--secondary-color);
  }
`

export const CardFooterWrapper = styled.div`

  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const CardTitle = styled.h3`
  font: 700 1.4rem 'Inter', sans-serif;
  color: var(--neutrals-000);
`

export const CardSubtitle = styled(CardTitle) `
  font: 400 1.2rem 'Poppins', sans-serif;
`

export const CardOption = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba( 255, 255, 255, 0.2);
  backdrop-filter: blur( .4rem );
  -webkit-backdrop-filter: blur( .6rem );
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 1200;
`
export const FormGroupInput = styled.div `
  position: relative;
`

export const InputChekbox = styled.input `
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`

export const Label = styled.label<{color?: string}> `
  font-size: 2rem;
  color: var(${({color}) => color ? color : "--secondary-color"});

  @media (max-width: 720px) {
    font-size: 3rem;
  }
`

export const CardsContainerRows = styled.div<{height?: string; }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: ${({height})=> height ? height : "100vh"};
  overflow: hidden;
  overflow-y: auto;

  padding-bottom: 10rem;
  padding-right: 2rem;

  @media (max-width: 1080px) {
    height: auto;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: column;

    overflow: hidden;
    overflow-x: auto;
    padding-bottom: 2rem;

    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: column;
    gap: 2rem;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;

  }
`

export const CardsContainerColumns = styled.div`

  width: 70vw;
  height: auto;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;
  padding-bottom: 2rem;

  overflow-x: scroll;
  overflow-y: hidden;

  @media (max-width: 1080px) {
    width: 100%;
    height: auto;

    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
`
export const CardsContainerRowsColumns =  styled.div `
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: row;
  overflow-y: auto;

  height: calc(100vh - 20rem);

  padding-bottom: 15rem;
  padding-right: 2rem;

  gap: 2rem;

  @media (min-width: 1081px) {
    padding-bottom: 20rem;
  }
  @media (max-width: 1080px) {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row;

    padding-right: 0;
    padding-bottom: 2rem;
    height: auto;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;

  }

  @media (max-width: 520px) {
      grid-template-columns: 1fr;
  }
`

