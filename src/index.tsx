import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import App from './App';
import { DataContextProvider } from './contexts/DataContext';
import FavoritesMovies from './pages/FavoreMovies';
import Movie from './pages/Movie/Movie';
import GlobalStyle from "./styles/globalStyles";

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN}`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/FavoritesMovies" element={<FavoritesMovies />} />
          <Route path="/movie/:id" element={<Movie />}/>
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


