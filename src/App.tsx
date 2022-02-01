import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from "./styles/globalStyles";


import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
