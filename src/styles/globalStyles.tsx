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

  .sr-only {
    position: absolute;
    height: 0;
    width: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
    font-family: 'Poppins', sans-serif;
  }


  .btn-lg {
    padding: 0.8rem 1.6rem;
    font-size: 2rem;
    line-height: 3rem;
    border-radius: 0.48rem;

    display: flex;
    align-items: center;
    gap: 1rem;
    transition: 0.3s all ease-in-out;

    margin-top: 4rem;
  }

  button:disabled {
    opacity: 0.6;
  }

  .btn-sm {
    cursor: pointer;
    touch-action: manipulation;

    padding: 0.9rem 1.92rem;
    font-size: 1.4rem;
    line-height: 1.5;
    border-radius: 0.32rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    transition: 0.3s all ease-in-out;
  }

  .btn-primary {
    background: var(--red-color);
    border: 0.1rem solid var(--red-color);
    color: var(--neutrals-000);

    &:not(:disabled):hover {
      filter: brightness(0.8);
    }
  }


  .btn-secondary {
    background: var(--secondary-color);
    border: 0.1rem solid var(--secondary-color);
    color: var(--neutrals-000);
    &:not(:disabled):hover {
      filter: brightness(0.8);
    }
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


`

export default GlobalStyle;