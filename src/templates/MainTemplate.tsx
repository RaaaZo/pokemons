import React from 'react'
import { CssBaseline, Grid, makeStyles, Link } from '@material-ui/core'
import Navigation from '../components/Navigation'

const useStyles = makeStyles({
  globalStyles: {
    overflowX: 'hidden',
    backgroundColor: '#f3f3f3',
  },
  footerStyles: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    height: 25,
    backgroundColor: '#f50057',
    color: '#fff',
  },
  linkStyles: {
    color: '#fff',
  },
})

interface Props {
  children: React.ReactNode
}

const StyleTemplate: React.FC<Props> = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid className={classes.globalStyles} container>
      <CssBaseline />
      <Navigation />
      {children}
      <Grid className={classes.footerStyles} justify='center' alignItems='center' container>
        <Link
          className={classes.linkStyles}
          href='https://github.com/'
          target='_blank'
          rel='noreferrer'
        >
          Mateusz Koprowicz
        </Link>
      </Grid>
    </Grid>
  )
}

export default StyleTemplate
