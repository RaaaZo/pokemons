import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SinglePokemonPage from './pages/SinglePokemonPage'
import PokemonPage from './pages/PokemonPage'

import StyleTemplate from './templates/MainTemplate'

function App() {
  return (
    <Router>
      <StyleTemplate>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/pokemon/:id' component={SinglePokemonPage} />
          <Route path='/pokemon' component={PokemonPage} />
        </Switch>
      </StyleTemplate>
    </Router>
  )
}

export default App
