import Title from "../Title";
import { AvatarReview, ReviewContainer, ReviewContent, ReviewHeader } from "./styles";
import { BsPersonCircle } from "react-icons/bs";
type MovieReviewType = {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
  }
  content: string;
  id: number;
  created_at: string;
}

type ReviewProps = {
  review: MovieReviewType;
}
const baseURLIMAGE = "https://image.tmdb.org/t/p/w500"

const MovieReview = ({ review }: ReviewProps) => {
  const { author_details, content } = review;
  const { username } = author_details;
  return (
    <ReviewContainer>
      <ReviewHeader>
        <AvatarReview >
          <BsPersonCircle />
        </AvatarReview>

        <Title
          color="--neutrals-400"
          fontSize="1.6rem"
          lineHeight="2.4rem"

        >
          {username}
        </Title>
      </ReviewHeader>

      <ReviewContent>
        {content}
      </ReviewContent>
    </ReviewContainer>
  )
}

export default MovieReview;