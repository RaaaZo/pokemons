import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'

import StyleTemplate from './templates/MainTemplate'

function App() {
  return (
    <Router>
      <StyleTemplate>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </StyleTemplate>
    </Router>
  )
}

export default App
