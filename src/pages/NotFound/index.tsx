import Container from "../../components/Containert";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { NotFoundImage, NotFoundMain } from "./styles";

const NotFound = () => {
  return (
    <Container>
      <Header />
      <NotFoundMain>
        <NotFoundImage src='./images/404.svg'/>
        <Title color="--neutrals-500" fontWeight="500">Page not found</Title>
      </NotFoundMain>
    </Container>
  )
}

export default NotFound;