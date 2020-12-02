import { CircularProgress, Grid, makeStyles } from '@material-ui/core'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FallbackComponent from './components/FallbackComponent'
import ErrorPage from './pages/ErrorPage'

import StyleTemplate from './templates/MainTemplate'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const SinglePokemonPage = React.lazy(() => import('./pages/SinglePokemonPage'))
const PokemonPage = React.lazy(() => import('./pages/PokemonPage'))

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <StyleTemplate>
        <Suspense fallback={FallbackComponent}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/pokemon/:id' component={SinglePokemonPage} />
            <Route path='/pokemon' component={PokemonPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Suspense>
      </StyleTemplate>
    </Router>
  )
}

export default App
