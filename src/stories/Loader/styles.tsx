import styled from "styled-components";

export const LoaderContainer = styled.div `

  display: inline-block;
  position: relative;
  width: 10px;
  height: 10px;

  &.medium {
    width: 30px;
    height: 30px;
  }
  &.large {
    width: 40px;
    height: 40px;
  }

`

export const LoaderBar = styled.div<{left: string, animationDelay: string, backgroundColor: string}>`
  display: inline-block;
  position: absolute;
  left: ${(({left}) => left)};
  width: 1.6rem;
  background: ${({backgroundColor}) => backgroundColor};

  animation: loaderAnimation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  animation-delay: ${(({animationDelay}) => animationDelay)};

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

