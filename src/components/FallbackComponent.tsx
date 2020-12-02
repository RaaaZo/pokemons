import React from 'react'
import { CircularProgress, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  wrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
})

const FallbackComponent = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.wrapper} container justify='center' alignItems='center'>
      <CircularProgress color='secondary' />
    </Grid>
  )
}

export default FallbackComponent
