import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'

const useStyles = makeStyles({
  wrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  marginTop: {
    marginTop: 40,
  },
})

const ErrorPage = () => {
  const classes = useStyles()
  const { push } = useHistory()

  return (
    <Grid
      className={classes.wrapper}
      container
      justify='center'
      alignItems='center'
      direction='column'
    >
      <Typography align='center' variant='h1'>
        Page not Found
      </Typography>
      <Button
        className={classes.marginTop}
        variant='contained'
        color='secondary'
        size='large'
        onClick={() => push('/')}
      >
        Go back to home!
      </Button>
    </Grid>
  )
}

export default ErrorPage
