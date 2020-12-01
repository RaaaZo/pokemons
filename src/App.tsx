import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokemonPage from './pages/PokemonPage'

import StyleTemplate from './templates/MainTemplate'

function App() {
  return (
    <Router>
      <StyleTemplate>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/pokemon/:id' component={PokemonPage} />
        </Switch>
      </StyleTemplate>
    </Router>
  )
}

export default App
