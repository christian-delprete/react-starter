import React from 'react'
import ReactDom from 'react-dom'
import { Router } from '@reach/router';
import MainPage from './pages/MainPage';
import SomePage from './pages/SomePage';
const root = document.getElementById('root')

const App = () => {
    return (
        <Router>
           <MainPage path="/" />
           <SomePage path="some" />
        </Router>
    )
}

ReactDom.render(<App />, root)