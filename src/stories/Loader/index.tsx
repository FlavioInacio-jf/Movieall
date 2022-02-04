import { LoaderContainer, LoaderBar } from "./styles"

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderBar left=".8rem" animationDelay = "-0.24s"></LoaderBar>
      <LoaderBar left="3.2rem" animationDelay = "-0.12s"></LoaderBar>
      <LoaderBar left="5.6rem" animationDelay = "0"></LoaderBar>
    </LoaderContainer>
  )
}

export default Loader;