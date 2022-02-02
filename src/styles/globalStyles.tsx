import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #D92027;
    --secondary-color: #FF9234;
    --tertirary-color: #FFCD3C;
    --quartenary-color: #35D0BA;


    --neutrals-000: #FFFFFF;
    --neutrals-050: #F5F7FA;
    --neutrals-100: #E4E7EB;
    --neutrals-200: #CBD2D9;
    --neutrals-300: #9AA5B1;
    --neutrals-400: #52667A;
    --neutrals-500: #313D49;
    --neutrals-600: #29333D;
    --neutrals-700: #212931;
    --neutrals-800: #181F25;
    --neutrals-900: #101418;
    --neutrals-999: #080A0C;
  }

  *, *:after, *:before {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    font-style: normal;
    cursor: default;
    background: none;
    border: none;
  }

  img {
    max-width: 100%;
    display block;
  }
  a {
    display: block;
    text-decoration: none;
  }
  svg {
    pointer-events: visibleStroke;
    cursor: pointer;
  }
  ul {
    list-style-type: none;
  }


  /* App fit Height */
  html,
  body {
    display: flex;
    flex: 1;
  }

  body {
    font: 400 1rem 'Poppins', sans-serif;
    background-color: var(--neutrals-000);
  }

  #root {
    width: 100vw;
    height: 100vh;
  }

  html {
    font-size: 62.5%; /* 1 */
    -webkit-text-size-adjust: 62.5%; /* 2 */
    -ms-text-size-adjust: 62.5%; /* 2 */
    -webkit-font-smoothing: antialiased;
  }

  *::-webkit-scrollbar {
    width: .6rem;
    height: .7rem;
  }

  *::-webkit-scrollbar-track {
    background: var(--neutrals-100);
    border-radius: 0.5rem;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: var(--neutrals-300);
  }
  *::-webkit-scrollbar-button {
    display: none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 56.25%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 50%;
    }
  }
`

export default GlobalStyle;