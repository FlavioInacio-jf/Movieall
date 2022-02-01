import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: rgba(44, 44, 43, 0.7);
  overflow-y: auto;
`

export const ModalContent = styled.div `
  margin-top: 4rem;


  height: 1000rem;
  background: var(--neutrals-000);
  border-radius: 0.5rem;

  position: relative;
`

export const ModalHeader = styled.header `
  width: 100%;
`

export const ModalImage = styled.img `
  width: fit-content;
  border-radius: 0.5rem 0.5rem 0 0;
`

export const ModalBody = styled.div `
  width: fit-content;
  border-radius: 0.5rem;
`

export const ModalButtonClose = styled.button `
  display: flex;
  align-items: center;

  position: absolute;
  top: 2rem;
  right: 2rem;

  padding: 1rem;

  clip-path: circle();
  background: var(--neutrals-999);

  font-size: 1.6rem;
  color: var(--neutrals-000);

  cursor: pointer;
`