import styled from "styled-components";

export const InfoContainer = styled.div `
  background: var(--secondary-color);

  padding: 1rem;

  border-radius: .3rem;
  opacity: 1;

  max-width: 30rem;
  box-shadow: .5rem .5rem 2rem 0 rgba(0, 0, 0, 0.4);
  animation: fadeout 4s;
  animation-timing-function: ease;
  animation-iteration-count: 1;

  span {

    color: var(--neutrals-800);
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }

  }

`

export const InfoText = styled.div `
  font: 500 1.6rem 'Inter', sans-serif;
  font-weight: 2.4rem;
  color: var(--neutrals-000);
`

export const InfoContainerWrapper = styled.div `
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;

  z-index: 1000;
`