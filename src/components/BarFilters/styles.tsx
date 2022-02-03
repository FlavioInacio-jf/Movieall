import styled from "styled-components";

export const BarFiltersContainer = styled.div`
  width: 100%;

  padding: 2rem 0;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 2rem;

  border-bottom: 0.1rem solid var(--neutrals-100);
  margin-bottom: 2rem;
`


export const Select = styled.select `

  appearance: none;

  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  line-height: 2.1rem;

  background: var(--neutrals-000);
  padding: 1rem 0;
  border-radius: 0.5rem;

  &:focus {
    outline: none;
  }


`
export const SelectWrapper = styled.div `
  display flex;
  align-items: center;
  gap: 1rem;

  font-size: 1.6rem;
  border: 0.1rem solid var(--neutrals-200);
  border-radius: 0.5rem;
  padding: 0 1rem;
`

export const Option = styled.option`

  margin-top: 2rem;
`