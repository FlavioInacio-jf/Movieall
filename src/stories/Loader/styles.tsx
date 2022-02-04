import styled from "styled-components";

export const LoaderContainer = styled.div `
  align-self: center;
  margin: 0 auto;

  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;
`

export const LoaderBar = styled.div<{left?: string, animationDelay?: string}>`
  display: inline-block;
  position: absolute;
  left: ${(({left}) => left ? left : ".8rem")};
  width: 1.6rem;
  background: var(--neutrals-200);

  animation: loaderAnimation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  animation-delay: ${(({animationDelay}) => animationDelay ? animationDelay : "0")} ;

  @keyframes loaderAnimation {
    0% {
      top: .8rem;
      height: 6.4rem;
    }
    50%, 100% {
      top: 2.4rem;
      height: 3.2rem;
    }
  }
`

