import { LoaderContainer, LoaderBar } from "./styles"


type LoaderProps = {
  backgroundColor: string;
  size: "small" | "medium" | "large"
}
const Loader = ({ backgroundColor = "var(--neutrals-200)", size }: LoaderProps) => {
  return (
    <LoaderContainer className={size}>
      <LoaderBar backgroundColor={backgroundColor} left=".8rem" animationDelay = "-0.24s"></LoaderBar>
      <LoaderBar backgroundColor={backgroundColor} left="3.2rem" animationDelay = "-0.12s"></LoaderBar>
      <LoaderBar backgroundColor={backgroundColor} left="5.6rem" animationDelay = "0"></LoaderBar>
    </LoaderContainer>
  )
}

export default Loader;