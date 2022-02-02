import styled from "styled-components";

export const ReviewContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: flex-start;

  width: 60%;

  border: 0.1rem solid var(--neutrals-100);
  border-radius: 0.5rem;
  padding: 2rem;
`

export const ReviewHeader = styled.header `
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1rem 0;
`

export const AvatarReview = styled.div `
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: var(--neutrals-400);

`

export const ReviewContent = styled.div `
  font-family: 'Inter', sans-serif;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--neutrals-500);
  word-wrap: break-word;

`