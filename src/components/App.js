import React from 'react';
import { Router } from '@reach/router';

import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
    <>
        <Header />
        <Router>
            <Home path="/" />
            <Movie path="/:movieId" />
            <NotFound default />
        </Router>
        <GlobalStyle />
    </>
);

export default App;




// import { createGlobalStyle } from 'styled-components'

// const GlobalStyle = createGlobalStyle`
//     body{
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//     }
// `