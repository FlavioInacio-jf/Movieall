import styled from "styled-components";

export const CardContainer = styled.div<{background : string, width?: string}>`
  width: ${({width}) => width ? width  : "40rem"};
  height: 20rem;

  border-radius: 1rem;
  background: -webkit-gradient(linear,left top, right top, from(rgba(0,0,0,.3))),
              url("https://image.tmdb.org/t/p/w500${({background}) => background}") no-repeat left top;
  background-size: cover;



  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 2rem;
  position: relative;
  margin-bottom: 2rem;
`

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  padding: 2rem;

  font: 400 1.4rem 'Inter', sans-serif;
  color: var(--neutrals-000);
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
  z-index: 999;



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
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  overflow: auto;

  padding-bottom: 6rem;
`


