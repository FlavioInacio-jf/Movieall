import styled from "styled-components";

const Button = styled.button `
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  color: var(--neutrals-600);
  border: 0.1rem solid var(--neutrals-200);
  border-radius: .5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.5rem 1rem;
  transition: all .3s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: var(--neutrals-300);
    color: var(--neutrals-700);
  }
`

export default Button;