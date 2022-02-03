import styled from "styled-components"

export const MovieContentBanner = styled.aside`
  grid-area: banner;
  height: 100%;

 @media (max-width: 1080px) {
   width: 100%;
   height: auto;
 }
`

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 1080px) {
    margin: 0 auto;
    width: auto;
    height: auto;
  }
`

export const MovieContentBody = styled.div`
  grid-area: content;
  height: 100vh;

  padding: 2rem;
  background: var(--neutrals-000);

  overflow-y: auto;
  display flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1080px) {
    height: auto;
  }

`

export const MovieContentHeader = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;


`
export const Description = styled.p`

  font-size: 1.6rem;
  line-height: 2.4rem;
  font-family: 'Inter', sans-serif;
  color: var(--neutrals-800);
  font-style: italic;
  max-width: 60%;
  text-align: center;

  @media (max-width: 720px) {
    max-width: 100%;
    word-break: break-all;
    word-wrap: break-word;
  }

`
export const List = styled.ul`
  padding: 2rem 0;

  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 720px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const Detail = styled.span`
  display: inline-block;

  font-family: 'Inter', sans-serif;
  color: var(--neutrals-000);
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin-left: 1rem;
  text-align: center;

  background: var(--neutrals-300);
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
`

export const Badge = styled.li`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--neutrals-000);
  background: var(--primary-color);
  text-align: center;

  padding: 0.5rem 1rem;
  border-radius: 5rem;
`

export const BadgeList = styled(List)`
li:nth-child(1) {
  background: var(--secondary-color);
}
li:nth-child(2) {
  background: var(--tertirary-color);
}
li:nth-child(3) {
  background: var(--quartenary-color);
}
li:nth-child(4) {
  background: var(--neutrals-600);
}
li:nth-child(5) {
  background: var(--neutrals-999);
}
`
export const MovieReviewsContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;
  padding-top: 2rem;

  @media (max-width: 720px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`