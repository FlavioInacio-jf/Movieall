import { createGlobalStyle, css} from 'styled-components';
export const fontUrl = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap";

export const bodyStyles = css `
  /* global styles */
`;

export const GlobalStyle = createGlobalStyle `
  body {
    ${bodyStyles}
  }
`
