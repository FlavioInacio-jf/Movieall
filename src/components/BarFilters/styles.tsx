import styled from "styled-components";

export const BarFiltersContainer = styled.div`
  width: 100%;

  padding: 2rem 0;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
`

export const FormGroup = styled.div`

`

export const Label = styled.label `
  display: block;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  color: vaR(--neutrals-700);
  margin-bottom: 1rem;
`

export const Input = styled.input`
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  line-height: 2.1rem;

  appearance: none;
  background: var(--neutrals-100);
  padding: 1rem 1.6rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  outline-color: var(--neutrals-100);

  &:focus {
    background: var(--netruals-000);
    outline: 0.1rem solid var(--secondary-color);
  }
`
export const Select = styled.select `
  margin-top: auto;

  appearance: none;

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  line-height: 2.1rem;

  background: var(--neutrals-000);
  padding: 1rem 1.6rem;
  border-radius: 0.5rem;

  border: 0.1rem solid var(--neutrals-200);

  &:focus {
    outline: none;
  }
`

export const Option = styled.option`
  padding: 1rem;
  margin-top: 2rem;
`